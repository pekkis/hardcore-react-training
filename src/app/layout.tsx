import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

import "normalize.css";
import "./layout.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Main from "@/components/Main";

export default async function RootLayout({ children }: Props) {
  return (
    <html lang="fi">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="stylesheet" href="https://use.typekit.net/bjx8ola.css" />
      </head>
      <body>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
}
