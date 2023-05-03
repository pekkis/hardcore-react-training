import { FC, ReactNode } from "react";
import { headerClass } from "./Header.css";
import kvauppalehtiLogo from "../assets/duckling.png";

type Props = {
  children?: ReactNode;
};

const Header: FC<Props> = ({ children }) => {
  return (
    <header className={headerClass}>
      <h1>
        <img alt="Kvauppalehti" src={kvauppalehtiLogo.src} width="50" />
        Kvauppalehti
      </h1>

      {children}
    </header>
  );
};

export default Header;
