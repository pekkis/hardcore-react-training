import { ReactNode } from "react";

import "normalize.css";
import "./layout.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Providers from "@/components/Providers";

type Props = {
  children: ReactNode;
};

export default async function Layout({ children }: Props) {
  return (
    <html lang="fi">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body>
        <Header />
        <Main>
          <Providers>{children}</Providers>
        </Main>
        <Footer />
      </body>
    </html>
  );
}
