import { ReactNode } from "react";

import "normalize.css";
import "./global.css";

import bg from "@/assets/duckling.png";

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
        <header>
          <h1>Kvauppalehti</h1>

          <img alt="Kvauppalehti" src={bg.src} />
        </header>
        {children}

        <footer>
          <small>&copy; copyright 2023 Dr. Kobros Foundation</small>
        </footer>
      </body>
    </html>
  );
}
