import { ComponentProps, FC, forwardRef } from "react";
import { buttonClass } from "./Button.css";

type Props = ComponentProps<"button">;

/*
{
  children: ReactNode;
};
*/

const Button: FC<Props> = ({ children, ...rest }, ref) => {
  // const classes = "puuppadoore lussandorf";

  return (
    <button {...rest} className={buttonClass} ref={ref}>
      {children}
    </button>
  );
};

export default forwardRef(Button);
