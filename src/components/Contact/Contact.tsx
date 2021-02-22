import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "./Contact.scss";
import { Form } from "./Form";

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="section-contact">
      <Container maxWidth="md">
        <Typography variant="h4" className="section-title" align="center">
          {t("contact.title")}
        </Typography>
        <Grid container spacing={2} justify="space-around">
          <Grid item xs={12} sm={6} className="icon-box">
            <PhoneIcon fontSize="large" />
            <Typography>{t("contact.phone")}</Typography>
            <Typography>+34 822 29 81 28 / +34 638 41 89 17</Typography>
          </Grid>
          <Grid item xs={12} sm={6} className="icon-box">
            <EmailIcon fontSize="large" />
            <Typography>{t("contact.email")}</Typography>

            <Typography>info@thebluebeachapartments.com</Typography>
          </Grid>
        </Grid>

        <Form />
      </Container>
    </section>
  );
};
