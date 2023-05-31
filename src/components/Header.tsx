import { FC } from "react";
import logo from "../assets/favicon.png";
import * as styles from "./Header.css";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <img
        className={styles.image}
        alt="Kvauppalehti"
        src={logo.src}
        width="50"
        height="50"
      />
      Kvauppalehti
    </header>
  );
};

export default Header;
