import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kvauppalehti",
  description: "Maailman paras kvauppapaikka"
};

import "normalize.css";
import "./layout.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import Providers from "@/components/Providers";

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fi">
      <body>
        <Providers>
          <Header UserBar={({ bar }) => <span>Lub Bleu {bar}</span>}></Header>

          <Main>{children}</Main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
