import { Amplify, withSSRContext, API } from "aws-amplify";
import * as queries from "../../graphql/queries";
import type { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import NotionNav from "../../components/notion-nav";

export const getStaticPaths: GetStaticPaths = async () => {
  const SSR = withSSRContext();
  const { data } = await SSR.API.graphql({ query: queries.listPosts });
  // Example of getting list of posts from GraphQL API
  const paths = data.listPosts.items.map((post) => ({
    params: { id: post.id },
  }));
  return {
    fallback: true,
    paths,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const SSR = withSSRContext();
  // Example of getting one post
  const { data } = await SSR.API.graphql({
    query: queries.getPost,
    variables: {
      id: params.id,
    },
  });
  return {
    props: {
      post: data.getPost,
    },
  };
};

const Post = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <NotionNav />
      <div
        style={{
          position: "absolute",
          left: `200px`,
          right: 0,
          // backgroundColor: "red",
          border: `1px solid black`,
          top: 0,
          minHeight: "100%",
        }}
      >
        post: {post.id}
      </div>
    </>
  );
};

export default Post;
