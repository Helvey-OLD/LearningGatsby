import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <h2>Index</h2>
    {data.allMarkdownRemark.edges.map(post => (
      <a key={post.node.frontmatter.path} href={post.node.frontmatter.path}>
        {post.node.frontmatter.title}
      </a>
    ))}
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <div>
      <Link to="/page-2/">Go to page 2></Link>
    </div>
    <div>
      <Link to="/page-3/">Go to page 3</Link>
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(limit: 10) {
      edges {
        node {
          id
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`
export default IndexPage
