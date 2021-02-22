import React, { useEffect } from "react";

import Layout from "../components/Layout";
import Image from "../components/image";
import Seo from "../components/Seo";
import { Link, useTranslation } from "gatsby-plugin-react-i18next";
import { graphql } from "gatsby";

import MainBanner from "../components/MainBanner";
import Contact from "../components/Contact";
import Map from "../components/Map";

const IndexPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Seo title={t("header.home")} />
      <MainBanner />
      <Contact />
      <Map />
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
