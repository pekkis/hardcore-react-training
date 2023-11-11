import { FC } from "react";
import * as styles from "./Header.css";

import kvaak from "../assets/duckling.png";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <img src={kvaak.src} className={styles.kvaak} alt="Kvauppalehden logo" />
      Kvauppalehti
    </header>
  );
};

export default Header;
