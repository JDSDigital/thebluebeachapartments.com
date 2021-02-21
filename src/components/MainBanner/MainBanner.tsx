import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Img from "gatsby-image";

export const MainBanner = () => {
  const images = useStaticQuery(graphql`
    query MainBanner {
      banner: file(relativePath: { eq: "main-banner.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1366) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <Img fluid={images.banner.childImageSharp.fluid} />;
};
