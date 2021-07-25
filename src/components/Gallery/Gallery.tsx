import React, { useState } from "react";
import ReactBnbGallery from "react-bnb-gallery";
import "./Gallery.scss";
import "react-bnb-gallery/dist/style.css";
import { graphql, useStaticQuery } from "gatsby";
import { Button, Container, Grid, Typography } from "@material-ui/core";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Img from "gatsby-image";

export const Gallery = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const images = useStaticQuery(graphql`
    query Gallery {
      gallery: allFile(
        filter: { relativeDirectory: { eq: "gallery" } }
        sort: { order: ASC, fields: name }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 1366) {
                ...GatsbyImageSharpFluid
              }
            }
            name
          }
        }
      }
    }
  `);

  const gallery = images.gallery.edges.map((image, index) => ({
    photo: image.node.childImageSharp.fluid.src,
    number: index,
  }));

  const handleClick = index => {
    setSelectedImage(index);
    setIsOpen(true);
  };

  return (
    <section id="gallery" className="section-gallery">
      <Container>
        <Typography variant="h4" className="section-title" align="center">
          {t("gallery.title")}
        </Typography>

        <div className="gallery">
          {images.gallery.edges.map((image, index) => (
            <Button
              key={`gallery-${index}`}
              onClick={() => handleClick(index)}
              className="gallery-button"
            >
              <Img
                fluid={image.node.childImageSharp.fluid}
                className="gallery-thumbnail"
              />
            </Button>
          ))}
        </div>

        <ReactBnbGallery
          show={isOpen}
          photos={gallery}
          activePhotoIndex={selectedImage}
          onClose={() => setIsOpen(false)}
          showThumbnails={false}
        />

        <Grid container justify="center">
          <Grid item xs={12} sm={10} md={8}>
            <div className="iframe-container">
              <iframe
                src="https://www.youtube.com/embed/MoeBxRU95uo"
                title="The Blue Beach apartments"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};
