import { FC } from "react";
import logo from "@/assets/duckling.png";
import Image from "next/image";
import * as styles from "./Header.css";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Image width="50" src={logo} alt="Kvauppalehti" /> Kvauppalehti
    </header>
  );
};

export default Header;
