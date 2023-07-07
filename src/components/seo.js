/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({ description, title, children }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            social {
              twitter
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  let is_root;

  if (title === "$cd ~/kuromimi") {
    is_root = true;
  } else {
    is_root = false;
  }

  return (
    <>
        <title>{is_root ? defaultTitle : `%s | ${defaultTitle}`}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={defaultTitle} />
        <meta property="og:image" content="https://kuromimi.moemarusan.com/ogp-image.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content={site.siteMetadata?.social?.twitter || ``} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content="https://kuromimi.moemarusan.com/ogp-image.png" />
        {children}
      </>
  )
}

Seo.defaultProps = {
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
