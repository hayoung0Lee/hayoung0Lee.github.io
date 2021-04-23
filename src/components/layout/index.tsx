import { FC, ReactChild } from "react";
import styles from "./layout.module.css";
import Header from "../header";

interface Props {
  children: ReactChild;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>footer</footer>
    </div>
  );
};

export default Layout;
