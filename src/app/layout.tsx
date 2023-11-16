import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

import "normalize.css";
import "./RootLayout.css";
import Providers from "./Providers";

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="fi">
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
