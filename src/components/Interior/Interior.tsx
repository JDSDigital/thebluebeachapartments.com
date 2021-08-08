import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "./Interior.scss";
import { graphql, useStaticQuery } from "gatsby";
import ImageGallery from "react-image-gallery";

export const Interior = () => {
  const { t } = useTranslation();

  const images = useStaticQuery(graphql`
    query Interior {
      interior1: file(relativePath: { eq: "gallery/06.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      interior2: file(relativePath: { eq: "gallery/10.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      interior3: file(relativePath: { eq: "gallery/11.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      interior4: file(relativePath: { eq: "gallery/15.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      interior5: file(relativePath: { eq: "gallery/16.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      interior6: file(relativePath: { eq: "gallery/19.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <section id="interior" className="section-interior">
      <Container>
        <Typography variant="h4" className="section-title" align="center">
          {t("interior.title")}
        </Typography>
        <Grid container spacing={4} alignItems="center" className="reverse-xs">
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" className="mb-3">
              {t("interior.p1")}
            </Typography>
            <Typography variant="body2" className="mb-3">
              {t("interior.p2")}
            </Typography>
            <Typography variant="body2" className="mb-3">
              {t("interior.p3")}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <ImageGallery
              items={Object.values(images).map((image: any) => ({
                original: image.childImageSharp.fluid.src,
                srcSet: image.childImageSharp.fluid.srcSet,
                sizes: image.childImageSharp.fluid.sizes,
              }))}
              slideInterval={7000}
              autoPlay={true}
              lazyLoad={true}
              showNav={true}
              showFullscreenButton={false}
              showPlayButton={false}
              showThumbnails={false}
              disableKeyDown={false}
              disableSwipe={false}
              showBullets={true}
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};
