import { API, graphqlOperation } from "aws-amplify";
import { useEffect, useState } from "react";
import * as queries from "../../graphql/queries";
import * as subscriptions from "../../graphql/subscriptions";
import * as mutations from "../../graphql/mutations";
import Link from "next/link";
import styles from "./nav.module.css";
import { FaRegFileAlt } from "react-icons/fa";
import { useRouter } from "next/router";

const NotionNav = () => {
  const [posts, setPosts] = useState<any>([
    {
      block: "{}",
      createdAt: "2021-05-14T14:09:27.363Z",
      id: "e62b2aa1-cd2d-4dd5-85fd-a45cc16e03fd",
      updatedAt: "2021-05-14T14:09:27.363Z",
    },
  ]);
  const router = useRouter();

  // console.log("posts", posts);
  // const callSomething = async () => {
  //   const allPosts = await API.graphql({ query: queries.listPosts });
  //   setPosts(
  //     // @ts-ignore
  //     allPosts.data?.listPosts.items ? allPosts.data?.listPosts.items : []
  //   );
  // };

  const addPost = async () => {
    const test = {
      block: JSON.stringify({}),
    };
    const newPost = await API.graphql({
      query: mutations.createPost,
      variables: { input: test },
    });
  };

  // useEffect(() => {
  //   callSomething();
  //   const subscription = API.graphql(
  //     graphqlOperation(subscriptions.onCreatePost)
  //     // @ts-ignore
  //   ).subscribe({
  //     next: ({ provider, value }) => {
  //       // something
  //       setPosts((prev) => [...prev, value.data.onCreatePost]);
  //     },
  //     error: (error) => console.warn(error),
  //   });
  // }, []);

  // shallow routing
  return (
    <nav className={styles.nav}>
      <ul>
        {posts?.map((p, index) => {
          return (
            <div className={styles.page} key={index}>
              <FaRegFileAlt />
              {/* <Link
                href={`/customNotion`}
                as={`/customNotion/${p.id}`}
                shallow={true}
              >{`page${index}`}</Link> */}
              <a
                onClick={() =>
                  router.push(`/customNotion`, `/customNotion/${index}`, {
                    shallow: true,
                  })
                }
              >{`page${index}`}</a>
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
