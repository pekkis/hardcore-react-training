import "@/styles/global.css";

import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// import "normalize.css";
import Main from "@/components/Main";

// import "./layout.css";
// import "./typography.css";
import Provider from "@/components/Provider";

// import "@gaylordmcduck/quack-ui/style.css";

type Props = {
  children: ReactNode;
};

export default async function RootLayout({ children }: Props) {
  return (
    <html lang="fi">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="stylesheet" href="https://use.typekit.net/bjx8ola.css" />
      </head>
      <body>
        <div id="portal"></div>
        <Provider>
          <Header />

          <Main>{children}</Main>

          <Footer />
        </Provider>
      </body>
    </html>
  );
}
