import { ComponentProps, FC, memo } from "react";
import cx from "clsx";

import * as styles from "./Button.css";

type Props = ComponentProps<"button"> & {
  variant?: "primary" | "secondary";
};

const Button: FC<Props> = ({
  className,
  variant = "primary",
  children,
  ...rest
}) => {
  // TODO: tehkää variantit, tyylittäkää.
  const classes = cx(
    styles.button,
    {
      [styles.primary]: variant === "primary",
      [styles.secondary]: variant === "secondary"
    },
    className
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

export default memo(Button);
