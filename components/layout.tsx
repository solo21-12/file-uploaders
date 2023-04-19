import { Footer, NavBar } from "@a/containers";
import Head from "next/head";
import { ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Head>
        <title>File uploader</title>
      </Head>
      <main className=" min-h-[90vh]">
        <NavBar/>
        {children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
