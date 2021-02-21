import React from "react";

import Layout from "../components/Layout";
import Image from "../components/image";
import Seo from "../components/Seo";
import { Link, useTranslation } from "gatsby-plugin-react-i18next";
import { graphql } from "gatsby";

import MainBanner from "../components/MainBanner";

const IndexPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Seo title={t("header.home")} />
      <MainBanner />
      <h1 className="test-class">Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
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
