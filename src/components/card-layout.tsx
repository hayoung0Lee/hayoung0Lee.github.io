import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { device } from "../utils/device";

const CardLayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  gap: 10px;
  grid-auto-rows: 120px;
  justify-content: space-between;

  & a {
    color: inherit;
    text-decoration: none;
  }

  @media ${device.laptop} {
    grid-template-columns: repeat(auto-fill, 40vw);
    // justify-content: center;
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(auto-fill, 44vw);
    // justify-content: center;
  }

  @media ${device.mobileL} {
    grid-template-columns: repeat(auto-fill, 80vw);
    justify-content: center;
  }
`;

const Card = styled.div`
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  border: 1px solid rgba(119, 119, 119, 0.6);
  border-radius: 5px;
  -webkit-box-shadow: 0 10px 6px -6px #777;
  -moz-box-shadow: 0 10px 6px -6px #777;
  box-shadow: 0 10px 6px -6px #777;

  // @media ${device.laptop} {
  //   width: 35vw;
  // }

  // @media ${device.tablet} {
  //   // width: 44vw;
  //   width: 100%;
  // }

  // @media ${device.mobileL} {
  //   width: 80vw;
  // }
`;

const CardTitle = styled.h4`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const CardDate = styled.h5`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

// const CardBody = styled.div`
//   height: 200px;
//   padding: 5px 5px 0px;
//   border-radius: 0 0 5px 5px;
//   overflow: hidden;
//   background-color: rgba(119, 119, 119, 0.2);
// `;

const CardLayout = ({ contents, base, tag }) => {
  if (tag === "all") {
    return (
      <CardLayoutWrapper>
        {contents.map(
          (
            d: {
              frontmatter: {
                title: React.ReactNode;
                slug: string;
                date: string;
              };
              html: any;
            },
            id: React.Key
          ) => {
            // const previewData = d.html?.substring(0, 250); // FIXME: 이거 일단 그냥 string으로 잘랐는데, 문제가 좀 있을듯
            return (
              <Link key={id} to={d.frontmatter.slug}>
                <Card>
                  <CardTitle>{d.frontmatter.title}</CardTitle>
                  <CardDate>{d.frontmatter.date}</CardDate>
                  {/* {previewData ? (
                  <CardBody
                    dangerouslySetInnerHTML={{ __html: previewData }}
                  ></CardBody>
                ) : (
                  <CardBody>어쩌면 미리보기..</CardBody>
                )} */}
                </Card>
              </Link>
            );
          }
        )}
      </CardLayoutWrapper>
    );
  }

  return (
    <CardLayoutWrapper>
      {contents
        .filter(({ fileAbsolutePath }) =>
          fileAbsolutePath.match(`/markdown-pages/${base}/${tag}`)
        )
        .map(
          (
            d: {
              frontmatter: {
                title: React.ReactNode;
                slug: string;
                date: string;
              };
              html: any;
              fileAbsolutePath: string;
            },
            id: React.Key
          ) => {
            // const previewData = d.html?.substring(0, 250); // FIXME: 이거 일단 그냥 string으로 잘랐는데, 문제가 좀 있을듯
            return (
              <Link key={id} to={d.frontmatter.slug}>
                <Card>
                  <CardTitle>{d.frontmatter.title}</CardTitle>
                  <CardDate>{d.frontmatter.date}</CardDate>
                  {/* {previewData ? (
                  <CardBody
                    dangerouslySetInnerHTML={{ __html: previewData }}
                  ></CardBody>
                ) : (
                  <CardBody>어쩌면 미리보기..</CardBody>
                )} */}
                </Card>
              </Link>
            );
          }
        )}
    </CardLayoutWrapper>
  );
};

export default CardLayout;
