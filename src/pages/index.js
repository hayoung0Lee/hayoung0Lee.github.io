import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <div>전체글을 보여줄까 고민중인 페이지</div>
      <p>
        JavaScript 개념 정리 <Link to="/blog/js-concept">읽기</Link>!
      </p>
    </Layout>
  );
};

export default IndexPage;
