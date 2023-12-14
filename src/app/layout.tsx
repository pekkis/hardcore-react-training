import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

import "normalize.css";
import "./layout.css";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Providers from "@/components/Providers";

export default async function Layout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <title>Duck Ecomist</title>
      </head>

      <body>
        <Providers>
          <Header />
          <Main>{children}</Main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
