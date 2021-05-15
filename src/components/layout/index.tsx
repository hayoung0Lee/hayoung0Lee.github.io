import { FC, ReactChild, useEffect, useContext } from "react";
import styles from "./layout.module.css";
import Header from "../header";
import Link from "next/link";
import { GlobalContext } from "../../utils/store";
import { useRouter } from "next/router";

interface Props {
  children: ReactChild;
}

const Layout: FC<Props> = ({ children }) => {
  const [{ cursteps }] = useContext(GlobalContext);
  const router = useRouter();
  // console.log(router);
  return (
    <div className={styles.layout}>
      <Header />
      {cursteps?.length > 0 ? (
        <main className={`${styles.main} ${styles.tutorialMain}`}>
          <nav>
            <ul>
              <li className={"listStyle"}>
                <Link href={`/tutorials`}>
                  <a className={"linkStyle"}>{"<"} Back</a>
                </Link>
              </li>
              {cursteps?.slice(1).map((f, index) => {
                return (
                  <li className={"listStyle"} key={index}>
                    <Link href={`/tutorials/${cursteps[0]}/${f.slice(0, -3)}`}>
                      <a className={"linkStyle"}>Step {+f.slice(0, -3) + 1}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <section>{children}</section>
        </main>
      ) : (
        <>
          <main className={styles.main}>{children}</main>
        </>
      )}
      <footer className={styles.footer}>footer</footer>
    </div>
  );
};

export default Layout;
