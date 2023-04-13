import { ClerkProvider } from "@clerk/nextjs";
import Head from "next/head";
import Layout from "~/components/layout";
import { api } from "~/utils/api";
import type { AppType } from "next/app";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Typing Practice</title>
        <meta
          name="description"
          content="Take a typing test, practice typing lessons, learn to type faster."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ClerkProvider {...pageProps}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ClerkProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
