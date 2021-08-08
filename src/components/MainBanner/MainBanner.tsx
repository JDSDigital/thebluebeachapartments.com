import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import "./MainBanner.scss";
import ImageGallery from "react-image-gallery";

export const MainBanner = () => {
  const images = useStaticQuery(graphql`
    query MainBanner {
      banner1: file(relativePath: { eq: "properties/7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      banner2: file(relativePath: { eq: "properties/13.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      banner3: file(relativePath: { eq: "properties/11.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      banner4: file(relativePath: { eq: "properties/12.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      banner5: file(relativePath: { eq: "properties/8.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <section id="home" className="section-banner">
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
    </section>
  );
};
