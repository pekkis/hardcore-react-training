import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

import "normalize.css";
import "./layout.css";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

export default async function Layout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <title>Duck Ecomist</title>
      </head>

      <body>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
}
