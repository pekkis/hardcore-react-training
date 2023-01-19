import { FC, ReactNode, ComponentProps } from "react";
import { buttonClass } from "./Button.css";

import cx from "clsx";

/*
type Props = {
  children: ReactNode;
};
*/

type Props = ComponentProps<"button">;

const Button: FC<Props> = ({ children, className, ...rest }) => {
  return (
    <button {...rest} className={cx(buttonClass, className)}>
      {children}
    </button>
  );
};

export default Button;
