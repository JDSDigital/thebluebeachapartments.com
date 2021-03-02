import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Img from "gatsby-image";
import "./MainBanner.scss";
import { Container } from "@material-ui/core";

export const MainBanner = () => {
  const images = useStaticQuery(graphql`
    query MainBanner {
      banner: file(relativePath: { eq: "properties/6.png" }) {
        childImageSharp {
          fluid(maxWidth: 1366) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logo: file(relativePath: { eq: "logo-2.jpg" }) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <section id="home" className="section-banner">
      <Img fluid={images.banner.childImageSharp.fluid} className="main-image" />
      {/* <Container className="position-relative">
        <Img
          fixed={images.logo.childImageSharp.fixed}
          className="main-image-logo"
        />
      </Container> */}
    </section>
  );
};
