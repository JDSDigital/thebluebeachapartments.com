import { Container } from "@material-ui/core";
import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "./Counter.scss";

export const Counter = () => {
  const { t } = useTranslation();

  return (
    <section id="counter" className="section-counter">
      <Container>
        <div className="counter">
          <span>{t("apartments.sold", { amount: 25 })}</span>
        </div>
      </Container>
    </section>
  );
};
