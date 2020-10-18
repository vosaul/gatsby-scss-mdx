import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';

import Container from './src/components/Container';


export default function Post({
  data: { mdx },
}) {
  return (
    <Layout pageName="mdx-g">
      <Helmet>
        <title>Page MDX</title>
      </Helmet>
    <Container>
      <h1>{mdx.frontmatter.title}</h1>
      <h2>{mdx.frontmatter.date}</h2>

      <MDXRenderer>{mdx.body}</MDXRenderer>

    </Container>
    </Layout>
  );
}

export const pageQuery = graphql`
{
  allMdx {
    nodes {
      frontmatter {
        banner
        title
        date
      }
      id
      slug
      body
    }
  }
}
`