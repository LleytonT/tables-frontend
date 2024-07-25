import React, { useRef } from "react";
import { Card, CardMedia, Typography, CardContent } from "@mui/material";

// Project type
type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
};

const url = process.env.BACKEND_URL as string;
// Get projects from 'url/feed'
// const projects: Project[] = fetch(`${url}/feed`)

// Step 2: Create sample project data
const projects: Project[] = [
  {
    id: 4,
    title: "Bank Card Freeze",
    description: "Some cool revolut stuff.",
    image:
      "https://cdn.dribbble.com/userupload/15484815/file/original-ee468327464c0fcc9fcd2daa1a592c36.mp4",
    link:
      "https://dribbble.com/shots/24482404-Bank-Card-Freeze-animation-branding-web-design-mobile-app-design"
  },
  {
    id: 1,
    title: "Charity App Design",
    description: "A cool app for charity I am making",
    image:
      "https://cdn.dribbble.com/userupload/15562546/file/original-d9d90a895950bdbceeb267f7b4959f09.png?resize=2048x1536",
    link: "https://dribbble.com/shots/24509335-Charity-App-Design"
  },
  {
    id: 2,
    title: "Max Keller",
    description:
      "Take a look at new the design concept for the finance service. Thanks for your likes and comments!",
    image:
      "https://cdn.dribbble.com/userupload/5004767/file/original-27b957bc7c9afd213aa9aae9c7d94552.jpg?resize=2048x1536",
    link: "https://dribbble.com/shots/20783943-Finance-service-Mobile-app"
  },
  {
    id: 3,
    title: "Online Banking App Design",
    description: "A bank that is always online.",
    image:
      "https://cdn.dribbble.com/userupload/3161675/file/original-1180ca7e5f0fad9505c763ece4d27de6.png?resize=2048x1536",
    link: "https://dribbble.com/shots/18852441-Online-Banking-App-Design"
  },
  {
    id: 5,
    title: "Mobile Design",
    description: "sample app",
    image:
      "https://cdn.dribbble.com/userupload/15402962/file/original-1c503aa96c8b637f167cf5024b000d0f.mp4",
    link: "https://dribbble.com/shots/24455042-Vet-App-Mobile-Design"
  },
  {
    id: 6,
    title: "Harmony App",
    description: "sample app",
    image:
      "https://cdn.dribbble.com/userupload/15490398/file/original-b2c4ca3db2f9f22dce94ad8b9300a5a2.png?resize=2400x1800",
    link: "https://dribbble.com/shots/24484368-Harmony-app-design"
  },
  {
    id: 7,
    title: "Online Banking App Design",
    description: "A bank that is always online.",
    image:
      "https://cdn.dribbble.com/userupload/10262964/file/original-19687640c8fcfa9c5244c6795f497eb3.mp4",
    link:
      "https://dribbble.com/shots/22634234-Glume-Healthcare-mobile-app-design-for-diabetics"
  },
  {
    id: 8,
    title: "Mobile Design",
    description: "sample app",
    image:
      "https://cdn.dribbble.com/userupload/6565500/file/original-e60b889e0a46904a7ac9a3db13c3e519.mp4",
    link: "https://dribbble.com/shots/24455042-Vet-App-Mobile-Design"
  },
  {
    id: 9,
    title: "Harmony App",
    description: "sample app",
    image:
      "https://cdn.dribbble.com/userupload/11743954/file/original-9095ba50c038e3a143ebbdcf41cc6ead.png?resize=2048x1536",
    link: "https://dribbble.com/shots/24484368-Harmony-app-design"
  }
  // Add more projects here
];

const NavBar: React.FC = () => {
  return (
    <nav
      className="flex justify-between items-center h-16 text-black relative shadow-sm font-mono"
      role="navigation"
    >
      <div className="pl-8">Tables</div>
      <button
        className="login mr-2"
        onClick={e => {
          console.log("Login button clicked");
        }}
      >
        Login
      </button>
    </nav>
  );
};

function videoOrImage(project: Project) {
  const isVideo = (url: string) => {
    return /\.(mp4|webm)$/i.test(url);
  };

  if (isVideo(project.image)) {
    return <video autoPlay muted loop src={project.image}/>
  }

  return         <CardMedia
  sx={{ height: '100%' }}
  image={project.image}
  title={project.title}
/>
}


const ProjectComponent: React.FC<{ project: Project }> = ({ project }) => {
  const isVideo = (url: string) => {
    return /\.(mp4|webm)$/i.test(url);
  };

  return (
      <Card style={{ width: '100%', height: '100%' }}>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <div style={{ width: '100%', height: '100%' }}>
            {videoOrImage(project)}
          </div>
          <CardContent style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            backgroundColor: 'black',
            color: 'white'
          }}>
            <Typography gutterBottom variant="h5" component="div" style={{ color: 'white' }}>
              {project.title}
            </Typography>
            <Typography variant="body2" style={{ color: 'white' }}>
              {project.description}
            </Typography>
          </CardContent>
        </div>
      </Card>
    );
};

const SearchBar: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    
    const handleSearch = () => {
        if (inputRef.current) {
        console.log("Searching for:", inputRef.current.value);
        }
    };
    
    return (
        <div className="flex justify-center items-center h-16">
        <input
            ref={inputRef}
            type="text"
            placeholder="Search"
            className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        />
        <button
            onClick={handleSearch}
            className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
        >
            Search
        </button>
        </div>
    );
    }

// Assuming Project and ProjectComponent are defined elsewhere

const Feed: React.FC = () => {
const shuffledProjects = projects.sort(() => Math.random() - 0.5);
  // Step 1: Assign a random span to each project
  const projectsWithSpan = shuffledProjects.map(project => ({
    ...project,
    span: Math.random() * 30 + 10
  }));

  return (
    <>
    <NavBar />
    <SearchBar />
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around"
      }}
    >
      {projectsWithSpan.map(project =>
        <div
          key={project.id}
          style={{
            flex: `1 1 ${project.span}%`, // Step 2: Conditional styling
            margin: "10px",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
            transition: "0.3s",
            borderRadius: "5px",
            // padding: "16px",
            backgroundColor: "#fff"
          }}
        >
          <ProjectComponent project={project} />
        </div>
      )}
    </div>
    </>
  );
};

export default Feed;
