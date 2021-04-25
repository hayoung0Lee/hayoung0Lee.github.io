import Head from "next/head";
import Link from "next/link";
import { GetStaticProps, GetStaticPaths } from "next";
import {
  readFilesForThisPage,
  getPath,
  readFile,
} from "../../../../utils/common";

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
  // 파일 읽기
  const postPath = getPath(`tutorials/${params.project}/${params.step}.md`);
  const fileContent = await readFile(postPath);

  return {
    props: {
      project: params.project,
      step: params.step,
      fileContent,
    },
  };
};

// Optional catch all routes
const Tutorials = ({ project, step, fileContent }) => {
  return (
    <div>
      <Head>
        <title>
          Hayoung's Tutorials - {project}/{step}
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>{step}</div>
      <ul>{fileContent}</ul>
    </div>
  );
};

export default Tutorials;
