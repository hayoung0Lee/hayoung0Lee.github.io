import Head from "next/head";
import Link from "next/link";
import { GetStaticProps, GetStaticPaths } from "next";
import { readFilesForThisPage, getPath, readFile } from "../../utils/common";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const tutorialPath = getPath("tutorials");
  const tutorialList = await readFilesForThisPage(tutorialPath);
  return {
    props: {
      tutorialList,
    },
  };
};

// Optional catch all routes
const Tutorials = ({ tutorialList }) => {
  // index page
  return (
    <div>
      <Head>
        <title>Hayoung's Tutorials</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h2>My tutorials</h2>
        <ul>
          {tutorialList.map((f, index) => {
            return (
              <li className={"listStyle"} key={index}>
                <Link href={`/tutorials/${f}`}>
                  <a className={"linkStyle"}>{f}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Tutorials;
