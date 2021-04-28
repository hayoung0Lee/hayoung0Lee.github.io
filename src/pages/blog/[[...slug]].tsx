import Head from "next/head";
import Link from "next/link";
import { GetStaticProps, GetStaticPaths } from "next";
import { readFilesForThisPage, getPath, readFile } from "../../utils/common";
import marked from "marked";
import MdViewer from "../../components/md-viewer";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";

export const getStaticPaths: GetStaticPaths = async () => {
  const postPath = getPath("blog");
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
    const postPath = getPath("blog");
    const fileList = await readFilesForThisPage(postPath);
    return {
      props: {
        slug: null,
        fileList,
      },
    };
  }

  const postPath = getPath(`blog/${params.slug}.md`);
  const fileContent = await readFile(postPath);

  // markdown
  hljs.registerLanguage("javascript", javascript);
  marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: function (code, lang) {
      const language = hljs.getLanguage(lang) ? lang : "plaintext";
      return hljs.highlight(code, { language }).value;
    },
    baseUrl: null,
    breaks: false,
    gfm: true,
    headerIds: true,
    headerPrefix: "",
    langPrefix: "language-",
    mangle: true,
    pedantic: false,
    sanitize: false,
    sanitizer: null,
    silent: false,
    smartLists: false,
    smartypants: false,
    tokenizer: null,
    walkTokens: null,
    xhtml: false,
  });

  return {
    props: {
      slug: params.slug,
      fileContent: marked(fileContent),
    },
  };
};

// Optional catch all routes
const Blog = ({ slug, fileList, fileContent }) => {
  if (slug === null) {
    // index page
    return (
      <div>
        <Head>
          <title>Hayoung's Blog</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
          <h2>Just Random Blog Posts</h2>
          <ul className={"index"}>
            {fileList.map((f, index) => {
              return (
                <li className={"listStyle"} key={index}>
                  <Link href={`/blog/${f.slice(0, -3)}`}>
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
        <title>Hayoung's Blog Post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <MdViewer>{fileContent}</MdViewer>
      </div>
    </div>
  );
};

export default Blog;
