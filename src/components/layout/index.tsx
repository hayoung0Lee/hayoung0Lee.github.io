import { FC, ReactChild, useEffect } from "react";
import styles from "./layout.module.css";
import Header from "../header";
import Link from "next/link";

interface Props {
  children: ReactChild;
  curSteps: any;
}

const Layout: FC<Props> = ({ children, curSteps }) => {
  useEffect(() => {
    console.log("layout reset", curSteps);
  }, [curSteps]);
  return (
    <div className={styles.layout}>
      <Header />
      {curSteps?.length > 0 ? (
        <main className={`${styles.main} ${styles.tutorialMain}`}>
          <nav>
            <ul>
              {curSteps?.slice(1).map((f, index) => {
                return (
                  <li className={"listStyle"} key={index}>
                    <Link href={`/tutorials/${curSteps[0]}/${f.slice(0, -3)}`}>
                      <a className={"linkStyle"}>{f}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <section>{children}</section>
        </main>
      ) : (
        <main className={styles.main}>{children}</main>
      )}
      <footer className={styles.footer}>footer</footer>
    </div>
  );
};

export default Layout;
