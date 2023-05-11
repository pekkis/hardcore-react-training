import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Providers from "@/components/Providers";

import "normalize.css";
import "./layout.css";

export const metadata = {
  title: "Rubals",
  description: "Drupals dripuls"
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <link rel="stylesheet" href="https://use.typekit.net/bjx8ola.css" />
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
