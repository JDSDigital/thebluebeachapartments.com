import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { Container, Grid, Typography } from "@material-ui/core";
import "./Footer.module.scss";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <Container>
        <Grid container spacing={2} justify="center">
          <Grid item xs={12}>
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
