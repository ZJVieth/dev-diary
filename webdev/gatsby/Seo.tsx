/**
 * # SEO Component for Gatsby Pages
 * <[gatsby
 * <[seo
 * <[jsx
 * <[header
 *
 * <°SEO component that queries for data with Gatsby's useStaticQuery React hook.°>
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

/*
 * Add this to gatsby-config:
 */
const metaData = {
    siteMetadata: {
      title: `<title>`,
      siteUrl: `<url>`,
      author: '<author>',
      description: '<desc>.'
    }
  }

/* Actual Component */
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

export interface ISeoProps {
  description?: string
  title: string
  children?: any
}

export function Seo(props: ISeoProps) {
  const { site } = useStaticQuery(
    graphql`
       query {
         site {
           siteMetadata {
             title
             description
             author
           }
         }
       }
     `
  )

  const metaDescription = props.description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <>
      <title>{defaultTitle ? `${props.title} | ${defaultTitle}` : props.title}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata?.author || ``} />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={metaDescription} />
      {props.children}
    </>
  )
}