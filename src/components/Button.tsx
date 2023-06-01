import clsx from "clsx";
import { ComponentProps, FC } from "react";

type Props = ComponentProps<"button"> & {
  variant?: "primary" | "secondary";
};

const Button: FC<Props> = ({ children, variant = "primary", ...props }) => {
  const classes = clsx({
    primary: variant === "primary",
    secondary: variant === "secondary"
  });

  return (
    <button
      {...props}
      className={classes}
      style={{
        border: "5px solid rgb(33 33 33)",
        borderRadius: "10px",
        padding: "1em"
      }}
    >
      {children}
    </button>
  );
};

export default Button;
