import Head from "next/head";
import Link from "next/link";
import { GetStaticProps, GetStaticPaths } from "next";
import { readFilesForThisPage, getPath, readFile } from "../../../utils/common";
import { useEffect, useContext } from "react";
import { GlobalContext } from "../../../utils/store";

export const getStaticPaths: GetStaticPaths = async () => {
  const tutorialPath = getPath("tutorials");
  const tutorialList = await readFilesForThisPage(tutorialPath);

  const paths = [];

  for (const t of tutorialList) {
    const curTutorialPath = getPath(`tutorials/${t}`);
    const curTutorialList = await readFilesForThisPage(curTutorialPath);

    for (const tt of curTutorialList) {
      paths.push({
        // tutorial/프로젝트명/파일명
        params: { project: t, step: tt.slice(0, -3) },
      });
    }
  }

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const curTutorialPaths = getPath(`tutorials/${params.project}`);
  const curTutorialList = await readFilesForThisPage(curTutorialPaths);
  const curTutorialContentsPath = getPath(
    `tutorials/${params.project}/${params.step}.md`
  );
  const curTutorialContents = await readFile(curTutorialContentsPath);
  return {
    props: {
      project: params.project,
      step: params.step,
      curTutorialList, // 목차
      curTutorialContents, // 내용
    },
  };
};

// Optional catch all routes
const Tutorials = ({ project, step, curTutorialList, curTutorialContents }) => {
  const [_, dispatch] = useContext(GlobalContext);

  useEffect(() => {
    dispatch({ type: `setSteps`, payload: [project, ...curTutorialList] });
  }, []);

  return (
    <div>
      <Head>
        <title>Hayoung's Tutorials - {project}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={"tutorialStep"}>
        <h1>
          Tutorials {project} - step {step}
        </h1>
        <section>{curTutorialContents}</section>
      </div>
    </div>
  );
};

export default Tutorials;
