import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "./Interior.scss";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

export const Interior = () => {
  const { t } = useTranslation();

  const images = useStaticQuery(graphql`
    query Interior {
      interior: file(relativePath: { eq: "interior.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <section id="interior" className="section-interior">
      <Container>
        <Typography variant="h4" className="section-title" align="center">
          {t("interior.title")}
        </Typography>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" className="mb-3">
              {t("interior.p1")}
            </Typography>
            <Typography variant="body2" className="mb-3">
              {t("interior.p2")}
            </Typography>
            <Typography variant="body2" className="mb-3">
              {t("interior.p3")}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Img
              fluid={images.interior.childImageSharp.fluid}
              className="main-image"
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};
