import { FC } from "react";
import * as styles from "./Footer.css";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      Copyright &copy; 2023 Ankkojen Talouselämä
    </footer>
  );
};

export default Footer;