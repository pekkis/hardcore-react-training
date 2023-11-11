import { FC } from "react";
import * as styles from "./Header.css";

import kvaak from "../assets/duckling.png";
import Link from "next/link";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <img src={kvaak.src} className={styles.kvaak} alt="Kvauppalehden logo" />
      <Link className={styles.link} href="/">
        Kvauppalehti
      </Link>
    </header>
  );
};

export default Header;
