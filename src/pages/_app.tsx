import "../styles/globals.css";
import Layout from "../components/layout";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  // leftNav
  const [curSteps, setCurSteps] = useState<string[]>([]);

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (toUrl, { shallow }) => {
      const tutorialPage = /^\/tutorials\/.+/;
      console.log(toUrl, toUrl.match(tutorialPage));
      if (!toUrl.match(tutorialPage)) {
        setCurSteps([]);
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <Layout curSteps={curSteps}>
      <Component {...pageProps} setCurSteps={setCurSteps} />
    </Layout>
  );
}

export default MyApp;
