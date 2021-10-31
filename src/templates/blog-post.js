import * as React from "react";
import { Link, graphql } from "gatsby";

import Bio from "../components/bio";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Utterances from "../components/utterances";

import { formatReadingTime } from "../utils/helpers";
import "./blog-post.scss";

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const { previous, next } = data;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>
            {post.frontmatter.date}
            {` • ${formatReadingTime(post.timeToRead)}`}
          </p>
        </header>
        <section
          className="markdown"
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>
      <nav className="blog-post-nav">
        <ul className="blog-post-nav__list">
          <li className="blog-post-nav__item">
            {previous && (
              <Link
                className="blog-post-nav__link prev"
                to={previous.fields.slug}
                rel="prev"
              >
                <span className="blog-post-nav__text prev">
                  {previous.frontmatter.title}
                </span>
              </Link>
            )}
          </li>
          <li className="blog-post-nav__item">
            {next && (
              <Link
                className="blog-post-nav__link next"
                to={next.fields.slug}
                rel="next"
              >
                <span className="blog-post-nav__text next">
                  {next.frontmatter.title}
                </span>
              </Link>
            )}
          </li>
        </ul>
      </nav>
      <Utterances repo="iamhayoung/blog-comments" />
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
