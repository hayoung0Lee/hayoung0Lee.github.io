import "../styles/globals.css";
import Layout from "../components/layout";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  // leftNav
  const [test, setTest] = useState<string[]>([]);
  console.log("pagePRops", pageProps);

  return (
    <Layout>
      <>
        <nav>보이기 {JSON.stringify(test)}</nav>
        <Component {...pageProps} test={test} setTest={setTest} />
      </>
    </Layout>
  );
}

export default MyApp;
