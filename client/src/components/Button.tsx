import React from "react";
import { FunctionComponent, ButtonHTMLAttributes } from "react";
import cx from "classnames";
import styles from "./Button.module.pcss";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  block: boolean;
};

const Button: FunctionComponent<Props> = ({
  block = false,
  children,
  ...rest
}) => {
  const classes = cx(styles.button, {
    [styles.block]: block
  });

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

export default Button;
