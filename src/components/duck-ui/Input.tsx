import {
  ComponentProps,
  FC,
  ForwardRefRenderFunction,
  forwardRef
} from "react";
import * as styles from "./Input.css";

import cx from "clsx";

type Props = ComponentProps<"input"> & {
  variant?: "primary" | "secondary";
};

const Input: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { variant = "primary", ...rest },
  ref
) => {
  console.log("ref", rest);

  const classes = cx(styles.input, {
    [styles.ribulsk]: variant === "primary",
    [styles.secondary]: variant === "secondary"
  });

  return <input className={classes} {...rest} ref={ref} />;
};

export default forwardRef(Input);
