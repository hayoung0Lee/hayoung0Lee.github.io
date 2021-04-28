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
            <CustomLink href="/blog" route={`Blog`} />
          </li>
          <li>
            <CustomLink href="/tutorials" route={`Tutorials`} />
          </li>
          <li>
            <CustomLink href="/leetcode" route={`Leetcode`} />
          </li>
          <li>
            <CustomLink href="/customNotion" route={`CustomNotion`} />
          </li>
          <li>
            <CustomLink href="/contact" route={`Contact`} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
