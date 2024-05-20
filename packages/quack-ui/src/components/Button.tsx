import { ComponentProps, FC } from "react";

type Props = ComponentProps<"button">;

const Button: FC<Props> = (props) => {
  return (
    <button {...props} className="px-8 rounded-md bg-[green] py-4">
      plaa
    </button>
  );
};

export default Button;
