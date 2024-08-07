export enum BlockType {
  Callout = "callout",
  Code = "code",
  Divider = "divider",
  Heading1 = "heading_1",
  Heading2 = "heading_2",
  Image = "image",
  Paragraph = "paragraph",
  Quote = "quote",
  Bookmark = "bookmark"
}

export interface Block {
  type: BlockType;
  content: Content;
}

export interface Content {
  rich_text?: RichText[];
  color?: string;
  icon?: Icon;
  is_toggleable?: boolean;
  caption?: any[];
  type?: string;
  file?: File;
  language?: string;
  url?: string;
}

export interface RichText {
  type: string;
  text?: Text;
  annotations: Annotations;
  plain_text: string;
  href?: string;
  mention?: Mention;
}

export interface Text {
  content: string;
  link?: Link;
}

export interface Link {
  url: string;
}

export interface Annotations {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

export interface Mention {
  type: string;
  link_preview: LinkPreview;
}

export interface LinkPreview {
  url: string;
}

export interface Icon {
  type: string;
  emoji: string;
}

export interface File {
  url: string;
  expiry_time: string;
}
