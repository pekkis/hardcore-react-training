import "../output.css";

import { ComponentProps, FC } from "react";

type Props = ComponentProps<"button">;

const Button: FC<Props> = (props) => {
  return (
    <button {...props} className="px-4 border rounded-sm bg-[pink]">
      plaa
    </button>
  );
};

export default Button;
