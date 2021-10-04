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
      <p>작성 중입니다. 잠시만 기다려주세요🙇‍♀️</p>
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
