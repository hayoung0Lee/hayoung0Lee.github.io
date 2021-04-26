import styles from "./header.module.css";
import Link from "next/link";
import CustomLink from "../link";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={`${styles.logo} text-center`}>
        <Link href="/">Hayoung</Link>
      </h1>
      <nav className={styles.nav}>
        <ul>
          <li>
            <CustomLink href="/" route={`Home`} />
          </li>
          <li>
            <CustomLink href="/tutorials" route={`Tutorials`} />
          </li>
          <li>
            <CustomLink href="/leetcode" route={`Leetcode`} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
