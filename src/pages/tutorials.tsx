import Head from "next/head";
import styles from "../styles/Home.module.css";

const Tutorials = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hayoung's Tutorials</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Tutorials</div>
    </div>
  );
};

export default Tutorials;
