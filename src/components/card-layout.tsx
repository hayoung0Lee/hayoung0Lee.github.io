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
  border: 1px solid rgba(119, 119, 119, 0.6);
  border-radius: 5px;
  -webkit-box-shadow: 0 10px 6px -6px #777;
  -moz-box-shadow: 0 10px 6px -6px #777;
  box-shadow: 0 10px 6px -6px #777;
`;

const CardTitle = styled.h4`
  width: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-left: 5px;
`;
const CardBody = styled.div`
  height: 200px;
  padding: 5px 5px 0px;
  border-radius: 0 0 5px 5px;
  overflow: hidden;
  background-color: rgba(119, 119, 119, 0.2);
`;

const CardLayout = ({ contents }) => {
  return (
    <CardLayoutWrapper>
      {contents.map(
        (
          d: {
            frontmatter: { title: React.ReactNode; slug: string };
            html: any;
          },
          id: React.Key
        ) => {
          const previewData = d.html?.substring(0, 250); // FIXME: 이거 일단 그냥 string으로 잘랐는데, 문제가 좀 있을듯
          return (
            <Link key={id} to={d.frontmatter.slug}>
              <Card>
                <CardTitle>{d.frontmatter.title}</CardTitle>
                {previewData ? (
                  <CardBody
                    dangerouslySetInnerHTML={{ __html: previewData }}
                  ></CardBody>
                ) : (
                  <CardBody>어쩌면 미리보기..</CardBody>
                )}
              </Card>
            </Link>
          );
        }
      )}
    </CardLayoutWrapper>
  );
};

export default CardLayout;
