import { ComponentProps, ForwardRefRenderFunction, forwardRef } from "react";
import * as styles from "./Input.css";

type Props = ComponentProps<"input"> & {
  variant?: "primary" | "secondary";
};

const Input: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { children, ...rest },
  ref
) => {
  return (
    <input {...rest} className={styles.input} ref={ref}>
      {children}
    </input>
  );
};

export default forwardRef(Input);
