import { ReactNode } from "react";

import "normalize.css";
import "./global2.css";
import { Providers } from "@/components/Providers";

type Props = {
  children: ReactNode;
};

export default async function WelcomeLayout({ children }: Props) {
  return (
    <html lang="fi">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="stylesheet" href="https://use.typekit.net/bjx8ola.css" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
