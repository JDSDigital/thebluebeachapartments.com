import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Img from "gatsby-image";
import "./MainBanner.scss";

export const MainBanner = () => {
  const images = useStaticQuery(graphql`
    query MainBanner {
      banner: file(relativePath: { eq: "main-banner-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1366) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <section id="home" className="section-banner">
      <Img fluid={images.banner.childImageSharp.fluid} className="main-image" />
    </section>
  );
};
