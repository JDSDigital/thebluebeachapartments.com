import React from "react";

import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { graphql } from "gatsby";

import { MainBanner } from "../components/MainBanner";
import { Project } from "../components/Project";
import { LifeStyle } from "../components/LifeStyle";
import { Design } from "../components/Design";
import { Interior } from "../components/Interior";
import { Contact } from "../components/Contact";
import { MapView } from "../components/Map";
import { Apartments } from "../components/Apartments/Apartments";

const IndexPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Seo title={t("header.home")} />
      <MainBanner />
      <Project />
      <LifeStyle />
      <Design />
      <Interior />
      <Apartments />
      <Contact />
      <MapView />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
