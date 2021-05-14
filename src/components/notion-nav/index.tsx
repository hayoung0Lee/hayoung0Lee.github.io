import { API, graphqlOperation } from "aws-amplify";
import { useEffect, useState } from "react";
import * as queries from "../../graphql/queries";
import * as subscriptions from "../../graphql/subscriptions";
import * as mutations from "../../graphql/mutations";
import Link from "next/link";

const NotionNav = () => {
  const [posts, setPosts] = useState<any>([]);

  const callSomething = async () => {
    const allPosts = await API.graphql({ query: queries.listPosts });
    setPosts(
      // @ts-ignore
      allPosts.data?.listPosts.items ? allPosts.data?.listPosts.items : []
    );
  };

  const addPost = async () => {
    const test = {
      block: JSON.stringify({}),
    };
    const newPost = await API.graphql({
      query: mutations.createPost,
      variables: { input: test },
    });
  };

  useEffect(() => {
    callSomething();
    const subscription = API.graphql(
      graphqlOperation(subscriptions.onCreatePost)
      // @ts-ignore
    ).subscribe({
      next: ({ provider, value }) => {
        // something
        setPosts((prev) => [...prev, value.data.onCreatePost]);
      },
      error: (error) => console.warn(error),
    });
  }, []);

  return (
    <>
      <ul>
        {posts?.map((p, index) => {
          return (
            <div key={index}>
              <Link href={`/customNotion/${p.id}`}>{p.id}</Link>
            </div>
          );
        })}
      </ul>
      <button onClick={addPost}>add</button>
    </>
  );
};

export default NotionNav;
