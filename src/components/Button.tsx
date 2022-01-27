import {
  ComponentPropsWithRef,
  ForwardRefRenderFunction,
  forwardRef
} from "react";

import { buttonClass } from "./Button.css";

type Props = ComponentPropsWithRef<"button">;

const Button: ForwardRefRenderFunction<HTMLButtonElement, Props> = (
  props,
  ref
) => {
  const { children, ...rest } = props;

  return (
    <button ref={ref} {...rest} className={buttonClass}>
      {children}
    </button>
  );
};

export default forwardRef(Button);
