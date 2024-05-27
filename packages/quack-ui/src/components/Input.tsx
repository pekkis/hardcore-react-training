import { ComponentProps, FC } from "react";

type Props = ComponentProps<"input">;

const Input: FC<Props> = (props) => {
  return <input {...props} />;
};

export default Input;
