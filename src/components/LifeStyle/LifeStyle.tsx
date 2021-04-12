import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { graphql, useStaticQuery } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Img from "gatsby-image";
import "./LifeStyle.scss";

export const LifeStyle = () => {
  const { t } = useTranslation();

  const images = useStaticQuery(graphql`
    query LifeStyleImages {
      design: file(relativePath: { eq: "properties/3.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      location: file(relativePath: { eq: "properties/5.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      environment: file(relativePath: { eq: "environment.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <section id="lifestyle" className="section-lifestyle">
      <Container>
        <Typography variant="h4" className="section-title" align="center">
          {t("lifestyle.title")}
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Img
              fluid={images.design.childImageSharp.fluid}
              className="lifestyle-image"
            />
            <Typography variant="h5">{t("lifestyle.design.title")}</Typography>
            <Typography variant="body2">
              {t("lifestyle.design.description")}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Img
              fluid={images.location.childImageSharp.fluid}
              className="lifestyle-image"
            />
            <Typography variant="h5">
              {t("lifestyle.location.title")}
            </Typography>
            <Typography variant="body2">
              {t("lifestyle.location.description")}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Img
              fluid={images.environment.childImageSharp.fluid}
              className="lifestyle-image"
            />
            <Typography variant="h5">
              {t("lifestyle.environment.title")}
            </Typography>
            <Typography variant="body2">
              {t("lifestyle.environment.description")}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};
