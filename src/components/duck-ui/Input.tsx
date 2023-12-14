import { ComponentProps, FC } from "react";

import * as styles from "./Input.css";
import clsx from "clsx";

type Props = {
  variant?: "primary" | "secondary";
} & ComponentProps<"input">;

const Input: FC<Props> = ({ variant = "primary", className, ...rest }) => {
  const classes = clsx(styles.input, styles[variant], className);

  return <input {...rest} className={classes} />;
};
export default Input;
