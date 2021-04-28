import { FC, ReactChild, useEffect, useContext } from "react";
import styles from "./layout.module.css";
import Header from "../header";
import Link from "next/link";
import { GlobalContext } from "../../utils/store";

interface Props {
  children: ReactChild;
}

const Layout: FC<Props> = ({ children }) => {
  const [{ cursteps }] = useContext(GlobalContext);
  console.log(cursteps);
  return (
    <div className={styles.layout}>
      <Header />
      {cursteps?.length > 0 ? (
        <main className={`${styles.main} ${styles.tutorialMain}`}>
          <nav>
            <ul>
              {cursteps?.slice(1).map((f, index) => {
                return (
                  <li className={"listStyle"} key={index}>
                    <Link href={`/tutorials/${cursteps[0]}/${f.slice(0, -3)}`}>
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
