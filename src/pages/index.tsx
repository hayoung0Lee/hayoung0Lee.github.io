import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hayoung's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>main</div>
    </div>
  );
};

export default Home;
