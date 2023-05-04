import { ComponentProps, FC } from "react";
import { buttonClass } from "./Button.css";

type Props = ComponentProps<"button"> & {
  variant: "primary" | "secondary";
};

const Button: FC<Props> = ({ children, ...rest }) => {
  return (
    <button className={buttonClass} {...rest}>
      {children}
    </button>
  );
};

export default Button;
