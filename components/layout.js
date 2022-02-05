import Head from "next/head";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Bulgur</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>
      <main>{children}</main>
    </>
  );
}
