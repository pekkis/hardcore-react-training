import { ComponentProps, ForwardRefRenderFunction, forwardRef } from "react";
import * as styles from "./Button.css";

type Props = ComponentProps<"button"> & {
  variant?: "primary" | "secondary";
};

const Button: ForwardRefRenderFunction<HTMLButtonElement, Props> = (
  { children, ...rest },
  ref
) => {
  return (
    <button {...rest} className={styles.button} ref={ref}>
      {children}
    </button>
  );
};

export default forwardRef(Button);
