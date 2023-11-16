import { ComponentProps, ForwardRefRenderFunction, forwardRef } from "react";
import cx from "clsx";

import * as styles from "./Input.css";

type Props = ComponentProps<"input">;

const Input: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  props,
  ref
) => {
  const classes = cx(styles.input);

  return <input {...props} ref={ref} className={classes} />;
};

export default forwardRef(Input);
