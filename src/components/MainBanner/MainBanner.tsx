import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import "./MainBanner.scss";
import ImageGallery from "react-image-gallery";

export const MainBanner = () => {
  const images = useStaticQuery(graphql`
    query MainBanner {
      banner: allFile(
        filter: {
          extension: { eq: "png" }
          relativeDirectory: { eq: "properties" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 1366) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      temp: file(relativePath: { eq: "properties/7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1366) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <section id="home" className="section-banner">
      <ImageGallery
        // items={images.banner.edges.map(image => ({
        //   original: image.node.childImageSharp.fluid.src,
        //   srcSet: image.node.childImageSharp.fluid.srcSet,
        //   sizes: image.node.childImageSharp.fluid.sizes,
        // }))}
        items={[
          {
            original: images.temp.childImageSharp.fluid.src,
            srcSet: images.temp.childImageSharp.fluid.srcSet,
            sizes: images.temp.childImageSharp.fluid.sizes,
          },
        ]}
        slideInterval={7000}
        autoPlay={true}
        lazyLoad={true}
        showNav={false}
        showFullscreenButton={false}
        showPlayButton={false}
        showThumbnails={false}
        disableKeyDown={true}
        disableSwipe={true}
      />
    </section>
  );
};
