import { FC, ReactNode } from "react";
import { headerClass } from "./Header.css";

type Props = {};

const Header: FC = () => {
  return <header className={headerClass}>Kvauppalehti</header>;
};

export default Header;
