import { FC } from "react";
import * as styles from "./Footer.css";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div>Copyright &copy; 2023 Gaylord McDuck Enterprises</div>
    </footer>
  );
};

export default Footer;
