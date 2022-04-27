/** @jsxImportSource @emotion/react */

import { FC } from "react";
import type { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  variant?: "primary" | "secondary";
}

const Button: FC<ButtonProps> = (props) => {
  const { children, variant = "primary", ...rest } = props;

  return (
    <button
      css={[
        {
          cursor: "pointer",
          borderRadius: "10px",
          padding: "0.5em",

          "&:hover": {
            backgroundColor: "rgb(255, 255, 255)"
          },

          "&:disabled": {
            opacity: 0.5,
            cursor: "not-allowed"
          }
        },
        variant === "primary" && {}
      ]}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
