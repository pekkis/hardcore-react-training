import {
  ComponentProps,
  FC,
  ForwardRefRenderFunction,
  forwardRef
} from "react";
import * as styles from "./Input.css";

type Props = ComponentProps<"input"> & {
  variant?: "primary" | "secondary";
};

const Input: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { variant = "primary", ...rest },
  ref
) => {
  // variantin käsittely
  return <input ref={ref} className={styles.input} {...rest} />;
};

export default forwardRef(Input);
