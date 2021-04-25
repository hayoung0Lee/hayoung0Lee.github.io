import Head from "next/head";
import Link from "next/link";
import { GetStaticProps, GetStaticPaths } from "next";
import { readFilesForThisPage, getPath, readFile } from "../../../utils/common";
import { useEffect } from "react";
export const getStaticPaths: GetStaticPaths = async () => {
  const tutorialPath = getPath("tutorials");
  const tutorialList = await readFilesForThisPage(tutorialPath);

  const paths = [];

  for (const t of tutorialList) {
    paths.push({
      // tutorial 폴더명
      params: { project: t },
    });
  }

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const curTutorialPaths = getPath(`tutorials/${params.project}`);
  const curTutorialList = await readFilesForThisPage(curTutorialPaths);

  return {
    props: {
      project: params.project,
      curTutorialList,
    },
  };
};

// Optional catch all routes
const Tutorials = ({ project, curTutorialList, test, setTest }) => {
  useEffect(() => {
    setTest(curTutorialList);
  }, []);

  return (
    <div>
      <Head>
        <title>Hayoung's Tutorials - {project}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Tutorials</div>
      프로젝트 소개하는 곳, 밑에 목차
      <ul>
        {curTutorialList?.map((f, index) => {
          return (
            <li className={"listStyle"} key={index}>
              <Link href={`/tutorials/${project}/${f.slice(0, -3)}`}>
                <a className={"linkStyle"}>{f}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Tutorials;
