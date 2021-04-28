import "../styles/globals.css";
import Layout from "../components/layout";
import { useEffect, useReducer } from "react";
import { useRouter } from "next/router";
import { initialState, reducer, GlobalContext } from "../utils/store";

function MyApp({ Component, pageProps }) {
  // TODO: redux like state management system using useContext and useReducer
  // https://medium.com/@martin.crabtree/react-creating-a-redux-like-global-state-with-the-usecontext-and-usereducer-hooks-89aa2b27dbc5
  // https://albertyuebaixu.medium.com/how-to-use-hooks-usecontext-usereducer-to-replace-redux-58b1b176abfe
  // leftNav
  const [state, dispatch] = useReducer(reducer, initialState);
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (toUrl, { shallow }) => {
      const tutorialPage = /^\/tutorials\/.+/;
      if (!toUrl.match(tutorialPage)) {
        dispatch({ type: `resetSteps` });
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <GlobalContext.Provider value={[state, dispatch]}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalContext.Provider>
  );
}

export default MyApp;
