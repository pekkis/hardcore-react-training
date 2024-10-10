import { FC } from "react";

import ReactMarkdown from "react-markdown";

type Props = {
  children: string;
};

export const Markdown: FC<Props> = ({ children }) => {
  return (
    <>
      <ReactMarkdown>{children}</ReactMarkdown>
    </>
  );
};
