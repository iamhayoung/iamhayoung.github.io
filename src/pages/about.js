import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

function About({ data, location }) {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="About" />
      <h1>About</h1>
      <p>안녕하세요, Frontend Developer 감하영입니다.</p>
      <p>
        이 블로그는 개발자로서 저만의 삶과 배움을 담을 예정으로, 아직은 많이
        부족한 상태이지만 조금씩 조금씩 착착 만들어나가고 있습니다🛠
      </p>
      <p>잠시만 기다려주세요!</p>
    </Layout>
  );
}

export default About;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
