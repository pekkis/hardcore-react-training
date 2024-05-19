import { ComponentProps, FC } from "react";

type Props = ComponentProps<"button">;

const Button: FC<Props> = (props) => {
  return <button {...props} />;
};

export default Button;
