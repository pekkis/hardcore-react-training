import { FC } from "react";
import ReactMarkdown from "react-markdown";
import Paragraph from "./duck-ui/Paragraph";

type Props = {
  children: string;
};

const Markdown: FC<Props> = ({ children }) => {
  return (
    <>
      <ReactMarkdown
        components={{
          p: (props) => <Paragraph>{props.children}</Paragraph>
        }}
      >
        {children}
      </ReactMarkdown>
    </>
  );
};

export default Markdown;
