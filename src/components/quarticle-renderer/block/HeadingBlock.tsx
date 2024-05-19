import { HeadingBlockType } from "@/services/quarticle";
import { FC } from "react";

type Props = {
  data: HeadingBlockType;
};

const HeadingBlock: FC<Props> = ({ data }) => {
  // <Container as="div" />

  const Component: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" = `h${data.level}`;

  return <Component>{data.text}</Component>;
};

export default HeadingBlock;
