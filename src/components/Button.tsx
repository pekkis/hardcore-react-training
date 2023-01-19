import {
  FC,
  ComponentProps,
  forwardRef,
  ForwardRefRenderFunction
} from "react";
import { buttonClass } from "./Button.css";

import cx from "clsx";

/*
type Props = {
  children: ReactNode;
};
*/

type Props = ComponentProps<"button">;

const Button: ForwardRefRenderFunction<HTMLButtonElement, Props> = (
  { children, className, ...rest },
  ref
) => {
  return (
    <button {...rest} className={cx(buttonClass, className)} ref={ref}>
      {children}
    </button>
  );
};

export default forwardRef(Button);
