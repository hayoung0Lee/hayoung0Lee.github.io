import { API, graphqlOperation } from "aws-amplify";
import { useEffect, useState } from "react";
import * as queries from "../../graphql/queries";
import * as subscriptions from "../../graphql/subscriptions";
import * as mutations from "../../graphql/mutations";
import Link from "next/link";
import styles from "./nav.module.css";
import { FaRegFileAlt } from "react-icons/fa";

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
    <nav className={styles.nav}>
      <ul>
        {posts?.map((p, index) => {
          return (
            <div className={styles.page} key={index}>
              <>
                <FaRegFileAlt />
                <Link href={`/customNotion/${p.id}`}>{`page${index}`}</Link>
              </>
            </div>
          );
        })}
        <div className={styles.page}>
          <button onClick={addPost}>Add a Page</button>
        </div>
      </ul>
    </nav>
  );
};

export default NotionNav;
