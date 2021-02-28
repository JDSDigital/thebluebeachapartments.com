import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "./Design.scss";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";

export const Design = () => {
  const { t } = useTranslation();

  const images = useStaticQuery(graphql`
    query Design {
      architecture: file(relativePath: { eq: "architecture.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <section id="design" className="section-design">
      <Container>
        <Typography variant="h4" className="section-title" align="center">
          {t("design.title")}
        </Typography>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} sm={6}>
            <Img
              fluid={images.architecture.childImageSharp.fluid}
              className="main-image"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" className="mb-3">
              {t("design.p1")}
            </Typography>
            <Typography variant="body2" className="mb-3">
              {t("design.p2")}
            </Typography>
            <Typography variant="body2" className="mb-3">
              {t("design.p3")}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};
