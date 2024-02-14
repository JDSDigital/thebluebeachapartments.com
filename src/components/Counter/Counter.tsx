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
      counter: file(relativePath: { eq: "sold.png" }) {
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
          <span>{t("apartments.sold", { amount: 27 })}</span>
        </div>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={10} md={8}>
            <Img fluid={image.counter.childImageSharp.fluid} />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};
