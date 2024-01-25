import { FC, ReactNode } from "react";

import "normalize.css";
import "./layout.css";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <html lang="fi">
      <head></head>
      <body>{children}</body>
    </html>
  );
};

export default Layout;
