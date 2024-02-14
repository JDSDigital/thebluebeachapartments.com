import { Container, Grid } from "@material-ui/core";
import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "./Counter.scss";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

export const Counter = () => {
  const { t } = useTranslation();

  const image = useStaticQuery(graphql`
    query Counter {
      sold: file(relativePath: { eq: "sold.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sold2: file(relativePath: { eq: "sold2.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <section id="counter" className="section-counter">
      <Container>
        <div className="counter">
          <span>{t("apartments.sold")}</span>
        </div>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={10} md={8}>
            <Img fluid={image.sold.childImageSharp.fluid} />
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            <Img fluid={image.sold2.childImageSharp.fluid} />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};
