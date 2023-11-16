import { FC } from "react";
import ReactMarkdown from "react-markdown";

type Props = {
  children: string;
};

const Markdown: FC<Props> = ({ children }) => {
  return <ReactMarkdown>{children}</ReactMarkdown>;
};

export default Markdown;
