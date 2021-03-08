import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Container = styled.main`
  width: 80vw;
  margin: auto;
  border: 1px solid black;
  padding-left: 20px;
  box-sizing: border-box;
`;
// markup
const IndexPage = () => {
  return (
    <Container>
      <p>
        JavaScript 개념 정리 <Link to="/blog/js-concept">읽기</Link>!
      </p>
    </Container>
  );
};

export default IndexPage;
