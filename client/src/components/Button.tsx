import React from "react";
import { FunctionComponent, ButtonHTMLAttributes } from "react";
import cx from "classnames";
import styles from "./Button.module.pcss";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  block?: boolean;
};

const Button: FunctionComponent<Props> = ({
  block = false,
  children,
  disabled,
  ...rest
}) => {
  const classes = cx(styles.button, {
    [styles.block]: block,
    [styles.disabled]: disabled
  });

  return (
    <button {...rest} className={classes} disabled={disabled}>
      {children}
    </button>
  );
};

export default React.memo(Button);
