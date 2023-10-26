import { FC, ReactNode } from "react";
import Image from "next/image";

import * as styles from "./Header.css";

import logo from "../assets/duckling.png";

type Props = {
  UserBar: ({ bar }: { bar: string }) => ReactNode;
};

const Header: FC<Props> = ({ UserBar }) => {
  // omaa paskaa
  const bar = "bilberry";

  return (
    <header className={styles.header}>
      <Image alt="Kvauppalehti" src={logo} />
      Kvauppalehti
      <div className={styles.absolutizer}>
        <UserBar bar={bar} />
      </div>
    </header>
  );
};

export default Header;
