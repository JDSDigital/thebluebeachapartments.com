import React from "react";
import { Grid, Button } from "@material-ui/core";
import Field from "./Field";
import { sendMail } from "../../../utils";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "./Form.scss";

export const Form = () => {
  const { t } = useTranslation();
  const [state, setState] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = React.useState(false);

  const handleChange = (event: any) => {
    setState({ ...state, [event.target.id]: event.target.value });
  };

  const handleMail = () => {
    if (state.name !== "" && state.email !== "" && state.message !== "") {
      sendMail(state);
      setSent(true);
      setState({ name: "", email: "", message: "" });
    } else {
      // TODO: Add form validation and error handling
    }
  };

  return (
    <Grid container item xs={12}>
      <form className="contact-form">
        <Field
          id="name"
          label={t("contact.form.name")}
          onChange={handleChange}
          disabled={sent}
          value={state.name}
        />
        <Field
          id="email"
          label={t("contact.form.email")}
          onChange={handleChange}
          disabled={sent}
          value={state.email}
        />
        <Field
          id="message"
          label={t("contact.form.message")}
          onChange={handleChange}
          disabled={sent}
          value={state.message}
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          classes={{ root: "mb-3 mt-3" }}
          onClick={handleMail}
          disabled={sent}
        >
          {sent ? t("contact.form.sent") : t("contact.form.send")}
        </Button>
      </form>
    </Grid>
  );
};
