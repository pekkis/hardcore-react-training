import { ComponentProps, ForwardRefRenderFunction, forwardRef } from "react";
import cx from "clsx";

type Props = ComponentProps<"input"> & {
  variant: "primary" | "secondary";
};

const Input: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  props,
  ref
) => {
  const { variant, className, ...rest } = props;

  const classes = cx("input", className, {
    primary: variant === "primary",
    secondary: variant === "secondary"
  });

  return <input {...rest} className={classes} ref={ref} />;
};

export default forwardRef(Input);
