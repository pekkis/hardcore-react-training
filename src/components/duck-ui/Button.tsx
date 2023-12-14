import { ComponentProps, FC } from "react";
// Import PooButton from "poo-ui"

import * as styles from "./Button.css";
import clsx from "clsx";

type Props = {
  variant?: "primary" | "secondary";
} & ComponentProps<"button">;

const Button: FC<Props> = ({
  variant = "primary",
  children,
  className,
  ...rest
}) => {
  const classes = clsx(styles.button, styles[variant], className);

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};
export default Button;
