import { FC } from "react";
import * as styles from "./Header.css";
import kvauppalehti from "../assets/kvauppalehti.png";
import Image from "next/image";
import Link from "next/link";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Image
        className={styles.logo}
        src={kvauppalehti}
        alt="Kvauppalehden logo"
      />
      <Link className={styles.link} href="/">
        Kvauppalehti
      </Link>
    </header>
  );
};

export default Header;
