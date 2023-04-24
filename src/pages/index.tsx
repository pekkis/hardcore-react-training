import Head from "next/head";
import Welcome from "@/components/welcome/Welcome";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hardcore React Training 2023</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Welcome />
    </>
  );
}
