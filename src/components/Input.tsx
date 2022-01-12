import {
  ComponentPropsWithRef,
  forwardRef,
  ForwardRefRenderFunction
} from "react";

import styles from "./Input.module.css";

type Props = ComponentPropsWithRef<"input">;

const Input: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  props,
  ref
) => {
  ref;

  return <input className={styles.input} ref={ref} {...props} />;
};

export default forwardRef(Input);
