import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "./Interior.scss";

export const Interior = () => {
  const { t } = useTranslation();

  return (
    <section id="section-interior">
      <Container>
        <Typography variant="h4" className="section-title" align="center">
          {t("interior.title")}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography className="mb-3">{t("interior.p1")}</Typography>
            <Typography className="mb-3">{t("interior.p2")}</Typography>
            <Typography className="mb-3">{t("interior.p3")}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            Foto
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};
