import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "./Project.scss";

export const Project = () => {
  const { t } = useTranslation();

  return (
    <section id="project" className="section-project">
      <Container>
        <Typography variant="h4" className="section-title" align="center">
          {t("project.title")}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography className="mb-3 font-bold">
              {t("project.p1")}
            </Typography>
            <Typography variant="body2" className="mb-3">
              {t("project.p2")}
            </Typography>
            <Typography variant="body2" className="mb-3">
              {t("project.p3")}
            </Typography>
            <Typography variant="body2" className="mb-3">
              {t("project.p4")}
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <ul>
              <li>
                <Typography variant="body2">{t("project.l1")}</Typography>
              </li>
              <li>
                <Typography variant="body2">{t("project.l2")}</Typography>
              </li>
              <li>
                <Typography variant="body2">{t("project.l3")}</Typography>
              </li>
            </ul>
          </Grid>

          <Grid item xs={12} sm={6}>
            <ul>
              <li>
                <Typography variant="body2">{t("project.l4")}</Typography>
              </li>
              <li>
                <Typography variant="body2">{t("project.l5")}</Typography>
              </li>
              <li>
                <Typography variant="body2">{t("project.l6")}</Typography>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};
