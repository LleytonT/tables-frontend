import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Block, BlockType, RichText, Annotations } from './ParseComponents';
import { CopyBlock, github } from 'react-code-blocks';
import { NavBar } from "./Navbar";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

/*
  Code = "code",
  Image = "image",
*/

function parser(block: Block) {
    switch (block.type) {
        case BlockType.Paragraph:
            return parseRichText(block.content.rich_text || [], 'mb-4');
        case BlockType.Heading1:
            return (
                <div className='mb-4'>
                    {parseRichText(block.content.rich_text || [], 'text-4xl font-bold')}
                </div>
            )
        case BlockType.Heading2:
            return (
                <div className='mb-2'>
                    {parseRichText(block.content.rich_text || [], 'text-3xl font-bold')}
                </div>
            )
        case BlockType.Divider:
            return <hr className="my-4 border-t-2 border-gray-200" />;
        case BlockType.Quote:
            return (
                <blockquote className="p-4 mb-4 text-lg italic border-l-4 border-gray-200 bg-gray-50">
                    {parseRichText(block.content.rich_text || [])}
                </blockquote>
            );
        case BlockType.Code:
            return (
                <div className="border border-gray-300 p-4 rounded mb-4">
                    <CopyBlock
                        text={block.content.rich_text?.map((text: RichText) => text.plain_text).join('') || ''}
                        language={block.content.language || 'plaintext'}
                        showLineNumbers={true}
                        customStyle={{
                            width: '100%',
                            overflow: 'scroll',
                        }}
                        theme={github}
                    />
                </div>
            );
        case BlockType.Image:
            return (
                <div className="flex justify-center mb-4">
                    <img
                        src={block.content.file?.url}
                        // className="w-60 h-auto"
                    />
                </div>
            );
        case BlockType.Bookmark:
            console.log(block);
            return (
                <div className="flex items-center p-4 mb-4 text-sm text-blue-800 rounded-lg bg-grey-50" role="alert">
                    <span className="text-2xl" role="img" aria-label="Info">{block.content.icon?.emoji} </span>
                <span className="sr-only">Info</span>
                {block.content.url}
                </div>
            );
        case BlockType.Callout:
            return (
                <div className="flex items-center p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50" role="alert">
                    <span className="text-2xl" role="img" aria-label="Info">{block.content.icon?.emoji} </span>
                <span className="sr-only">Info</span>
                {parseRichText(block.content.rich_text || [])}
                </div>
            );
        default:
            console.log('Unknown block type:', block.type);
            return null;
    }
}

function parseRichText(richText: RichText[], classnames?: string) {
    const mapped = richText.map((text) => {
        const style = {
            fontWeight: text.annotations.bold ? 'bold' : 'normal',
            fontStyle: text.annotations.italic ? 'italic' : 'normal',
            textDecoration: text.annotations.underline ? 'underline' : 'none',
            color: text.annotations.color,
            padding: '1px'
        };

        if (text.annotations.code) {
            return (
                <code 
                    style={{...style, backgroundColor: 'lightgrey', padding: '2px', borderRadius: '2px', color: 'red'}} 
                    className={classnames}
                >
                    {text.plain_text}
                </code>
            );
        }

        if (text.href) {
            return (
                <a
                    href={text.href}
                    style={{ ...style, color: 'grey', textDecoration: 'underline' }}
                    className={classnames}
                >
                    {text.plain_text}
                </a>
            );
        }

        return (
            <span style={style} className={classnames}>
                {text.plain_text}
            </span>
        );
    });

    return (
        <div className={classnames}>
            {mapped}
        </div>
    );

}

const Project: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) return;
    isMounted.current = true;

    const fetchProject = async () => {
      try {
        const response = await fetch(`${backendUrl}/api/getpage/?uuid=${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // parse the data
        const parsedData = data['blocks'].map((block: Block) => parser(block));
        const title = data['title'];
        console.log(title);
        parsedData.unshift(
            <div className="flex items-center gap-4 mb-4">
                <img className="w-10 h-10 rounded-full" src="https://tables-frontend.vercel.app/icon.png" alt="" />
                <div className="font-medium">
                    <div>{data['author']}</div>
                </div>
            </div>
        )
        parsedData.unshift(
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
        );
        setProject(parsedData);
      } catch (error) {
        // setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

return (
    <>
    <NavBar />
    <div className="w-2/5 mx-auto mt-4">
        {project ? (
            <div>
                {project}
                {/* Render other project details as needed */}
            </div>
        ) : (
            <div>No project found</div>
        )}
    </div>
    </>
);
};

export default Project;