import Head from "next/head";
import Link from "next/link";
import {
  GetStaticProps,
  GetStaticPaths,
  GetServerSideProps,
  GetStaticPropsContext,
} from "next";
import { readFilesForThisPage, getPath, readFile } from "../../utils/common";

// https://github.com/vercel/next.js/issues/14886
// All falsy values passed into getStaticPaths result in the omission of the variable from params.
// 이렇게 정리할 수 있도록 하기:https://github.com/SOMJANG/CODINGTEST_PRACTICE
export const getStaticPaths: GetStaticPaths = async () => {
  const postPath = getPath("leetcode");
  const fileList = await readFilesForThisPage(postPath);

  const paths = [
    {
      params: { slug: [] }, // index page
    },
  ];

  for (const f of fileList) {
    paths.push({
      // .md 제거
      params: { slug: [f.slice(0, -3)] },
    });
  }

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params.slug) {
    const postPath = getPath("leetcode");
    const fileList = await readFilesForThisPage(postPath);
    return {
      props: {
        slug: null,
        fileList,
      },
    };
  }

  const postPath = getPath(`leetcode/${params.slug}.md`);
  const fileContent = await readFile(postPath);
  return {
    props: {
      slug: params.slug,
      fileContent,
    },
  };
};

// Optional catch all routes
const LeetCode = ({ slug, fileList, fileContent }) => {
  if (slug === null) {
    // index page
    return (
      <div>
        <Head>
          <title>Hayoung's leetcode</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
          <h2>I'm using LeetCode to enhance my algorithm skills</h2>
          <ul>
            {fileList.map((f, index) => {
              return (
                <li className={"listStyle"} key={index}>
                  <Link href={`/leetcode/${f.slice(0, -3)}`}>
                    <a className={"linkStyle"}>{f}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }

  // each page
  return (
    <div>
      <Head>
        <title>Hayoung's leetcode</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h2>It is {slug}</h2>
        <div>{fileContent}</div>
      </div>
    </div>
  );
};

export default LeetCode;
