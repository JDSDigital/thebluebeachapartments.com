import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { Container, Grid, Typography } from "@material-ui/core";
import "./Footer.module.scss";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

export const Footer = () => {
  const { t } = useTranslation();
  const images = useStaticQuery(graphql`
    query Footer {
      logo: file(relativePath: { eq: "logo.jpg" }) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <footer>
      <Container>
        <Grid container spacing={2} justify="center">
          <Grid item xs={12} sm={6}>
            <Img
              fixed={images.logo.childImageSharp.fixed}
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
