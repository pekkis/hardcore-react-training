import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

import "normalize.css";

export default async function RootLayout({ children }: Props) {
  return (
    <html lang="fi">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="stylesheet" href="https://use.typekit.net/bjx8ola.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
