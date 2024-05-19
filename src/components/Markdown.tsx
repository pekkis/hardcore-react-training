import { FC } from "react";
import ReactMarkdown from "react-markdown";

type Props = {
  // markdown: string
  children: string; // ReactNode
};

const Markdown: FC<Props> = ({ children }) => {
  return (
    <>
      <ReactMarkdown>{children}</ReactMarkdown>
    </>
  );
};

export default Markdown;
