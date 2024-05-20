import { ComponentProps, FC } from "react";

// import styles from "./Button.module.css";

import * as stylex from "@stylexjs/stylex";
import { tokens } from "tokens.stylex";

type Losoness = "l" | "xl";

const styles = stylex.create({
  button: {
    paddingBlock: ".5rem",
    paddingInline: "1rem",
    color: tokens.primaryText,
    backgroundColor: {
      default: tokens.background,
      "@container (width > 250px)": "rebeccapurple"
    }
  },
  soft: {
    backgroundColor: "rebeccapurple",
    borderRadius: "15px"
  },
  solid: {
    borderRadius: "3px"
  },
  loso: (losoness: Losoness) => ({
    fontWeight: losoness === "l" ? "normal" : "bold"
    // The function body must be an object literal
    // -- { return {} } is not allowed
  })
});

type Props = ComponentProps<"button"> & {
  variant?: "solid" | "soft";
  losoness?: Losoness;
};

const Button: FC<Props> = ({ variant = "solid", losoness = "l", ...rest }) => {
  return (
    <button
      {...rest}
      {...stylex.props(
        styles.button,
        variant === "soft" && styles.soft,

        variant === "solid" && styles.solid,
        styles.loso(losoness)
      )}
    />
  );
};

export default Button;
