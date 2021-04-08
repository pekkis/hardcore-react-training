/* @jsxImportSource @emotion/react */
import { ButtonHTMLAttributes, FC } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {};

const Button: FC<Props> = (props) => {
  return (
    <button
      {...props}
      css={[
        {
          border: "1px solid rgb(0, 0, 0)",
          padding: "1em",
          fontFamily: "inherit"
        },
        props.disabled && {
          opacity: 0.5
        }
      ]}
    />
  );
};

export default Button;
