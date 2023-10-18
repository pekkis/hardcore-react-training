import { FC } from "react";
import Image from "next/image";

import * as styles from "./Header.css";

import logo from "../assets/duckling.png";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Image alt="Kvauppalehti" src={logo} />
      Kvauppalehti
    </header>
  );
};

export default Header;
