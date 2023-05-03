import { FC, ReactNode } from "react";
import { h1Class, headerClass, linkClass } from "./Header.css";
import kvauppalehtiLogo from "../assets/duckling.png";
import Link from "next/link";

type Props = {
  children?: ReactNode;
};

const Header: FC<Props> = ({ children }) => {
  return (
    <header className={headerClass}>
      <div className={h1Class}>
        <img alt="Kvauppalehti" src={kvauppalehtiLogo.src} width="50" />

        <Link className={linkClass} href="/">
          Kvauppalehti
        </Link>
      </div>

      {children}
    </header>
  );
};

export default Header;
