import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "./Design.scss";

export const Design = () => {
  const { t } = useTranslation();

  return (
    <section id="section-design">
      <Container>
        <Typography variant="h4" className="section-title" align="center">
          {t("design.title")}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            Foto
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography className="mb-3">{t("design.p1")}</Typography>
            <Typography className="mb-3">{t("design.p2")}</Typography>
            <Typography className="mb-3">{t("design.p3")}</Typography>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};
