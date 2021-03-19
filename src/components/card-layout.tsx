import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const CardLayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  gap: 10px;
  grid-auto-rows: 300px;
  justify-content: space-between;

  & a {
    color: inherit;
    text-decoration: none;
  }
`;

const Card = styled.div`
  width: 250px;
  height: 300px;
  border: 1px solid black;
`;

const CardTitle = styled.h4`
  width: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const CardBody = styled.div`
  height: 200px;
  background-color: grey;
`;

const CardLayout = ({ contents }) => {
  return (
    <CardLayoutWrapper>
      {contents.map(
        (
          d: { frontmatter: { title: React.ReactNode; slug: string } },
          id: React.Key
        ) => {
          return (
            <Link to={d.frontmatter.slug}>
              <Card key={id}>
                <CardTitle>{d.frontmatter.title}</CardTitle>
                <CardBody>어쩌면 미리보기..</CardBody>
              </Card>
            </Link>
          );
        }
      )}
    </CardLayoutWrapper>
  );
};

export default CardLayout;
