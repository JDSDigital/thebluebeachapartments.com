import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import "./MainBanner.scss";
import Img from "gatsby-image";

export const MainBanner = () => {
  const images = useStaticQuery(graphql`
    query MainBanner {
      banner: file(relativePath: { eq: "properties/10.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
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
