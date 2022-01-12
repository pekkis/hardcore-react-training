import {
  ComponentPropsWithRef,
  forwardRef,
  ForwardRefRenderFunction
} from "react";

import styles from "./Button.module.css";

type Props = ComponentPropsWithRef<"button">;

const Button: ForwardRefRenderFunction<HTMLButtonElement, Props> = (
  props,
  ref
) => {
  ref;

  return <button className={styles.button} ref={ref} {...props} />;
};

export default forwardRef(Button);
