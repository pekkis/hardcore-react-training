import { ComponentProps, forwardRef, ForwardRefRenderFunction } from "react";
import { buttonClass } from "./Button.css";

type Props = ComponentProps<"button">;

/*
{
  children: ReactNode;
};
*/

const Button: ForwardRefRenderFunction<HTMLButtonElement, Props> = (
  { children, ...rest },
  ref
) => {
  return (
    <button {...rest} className={buttonClass} ref={ref}>
      {children}
    </button>
  );
};

export default forwardRef(Button);
