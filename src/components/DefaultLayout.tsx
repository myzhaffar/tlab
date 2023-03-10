import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

export default function DefaultLayout({ children }: any) {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Head>
        <title>TLab</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/brand_logo.svg" />
      </Head>

      <main className="max-w-screen mx-auto ">
        <Header />

        {children}
        <Footer />
      </main>
    </div>
  );
}