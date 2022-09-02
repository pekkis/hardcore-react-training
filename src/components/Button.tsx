import { FC, ComponentProps } from "react";
import cx from "clsx";
import { buttonClass, primaryClass, secondaryClass } from "./Button.css";

type Props = ComponentProps<"button"> & {
  variant?: "primary" | "secondary";
};

const Button: FC<Props> = ({ children, variant = "primary", ...rest }) => {
  const classes = cx(buttonClass, {
    [primaryClass]: variant === "primary",
    [secondaryClass]: variant === "secondary"
  });

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

export default Button;
