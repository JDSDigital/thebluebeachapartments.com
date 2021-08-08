import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { Container, Grid, Typography } from "@material-ui/core";
import "./Footer.scss";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

export const Footer = () => {
  const { t } = useTranslation();
  const images = useStaticQuery(graphql`
    query Footer {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <footer>
      <Container>
        <Grid container spacing={2} justify="space-between">
          <Grid item xs={12} sm={3}>
            <Img
              fluid={images.logo.childImageSharp.fluid}
              className="main-image"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle2" align="right">
              +34 822 29 81 28
            </Typography>
            <Typography variant="subtitle2" align="right">
              +34 638 41 89 17
            </Typography>
            <Typography variant="subtitle2" align="right">
              <a href="mailto:info@thebluebeachapartments.com" target="_blank">
                info@thebluebeachapartments.com
              </a>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle2" align="center">
              {`© ${new Date().getFullYear()} - ${t("footer.copyright")}`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};
