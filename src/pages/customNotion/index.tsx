import Head from "next/head";
import { Amplify, withSSRContext, API } from "aws-amplify";
import awsExports from "../../aws-exports";
import { useEffect } from "react";
import * as queries from "../../graphql/queries";

Amplify.configure({ ...awsExports, ssr: true });

// export async function getStaticPaths() {
//   const SSR = withSSRContext();
//   const { data } = await SSR.API.graphql({ query: listPosts });
//   // Example of getting list of posts from GraphQL API
//   const paths = data.listPosts.items.map((post) => ({
//     params: { id: post.id },
//   }));
//   return {
//     fallback: true,
//     paths,
//   };
// }
// export async function getStaticProps({ params }) {
//   const SSR = withSSRContext();
//   // Example of getting one post
//   const { data } = await SSR.API.graphql({
//     query: getPost,
//     variables: {
//       id: params.id,
//     },
//   });
//   return {
//     props: {
//       post: data.getPost,
//     },
//   };
// }

const CustomNotion = () => {
  const callSomething = async () => {
    const allTodos = await API.graphql({ query: queries.listPosts });
    console.log(allTodos);
  };

  useEffect(() => {
    callSomething();
  }, []);

  return (
    <div>
      <Head>
        <title>Hayoung's Notion</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>CustomNotion</div>

      {/* TODO: 좌측에 notion처럼 페이지를 추가하는 기능 구현하기(추가할 때 페이지가 알아서 route됨) */}
      {/* TODO: Drag and Drop이 되는 블럭을 생성해야함 */}
      {/* TODO: 마지막 컨텐츠 다음에는 항상 새로운 블럭을 생성할 수 있도록 해야함 */}
      {/* TODO: 블럭은 여러 종류가 있지만 몇가지로 제한해서 생성해보자 */}
      {/* TODO: JSON 객체를 활용해야할 것 같음 */}
    </div>
  );
};

export default CustomNotion;
