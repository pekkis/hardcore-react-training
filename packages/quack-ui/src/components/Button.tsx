import { ComponentProps, FC } from "react";
import styles from "./Button.module.css";

type Props = ComponentProps<"button">;

const Button: FC<Props> = (props) => {
  return <button {...props} className={styles.button} />;
};

export default Button;
