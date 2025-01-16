import React from "react";
import Seo from "../components/seo";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";
import "../styles/portfolio-item.css";

const PortfolioItemTemplate = ({ data }) => {
  const { titel, bild, beskrivning, verktygsIkoner } = data.contentfulProjekt;
  const gatsbyImage = getImage(bild);

  return (
    <Layout>
      <Seo title={titel} />

      <motion.main
        className="portfolio-item-container"
        initial={{ x: 1000, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.56 }}
      >
        <div className="portfolio-item">
          <div className="portfolio-content">
            <div className="portfolio-image-container">
              {gatsbyImage && (
                <GatsbyImage
                  className="portfolio-image"
                  image={gatsbyImage}
                  alt={`Bild för projektet ${titel}`}
                />
              )}
            </div>
            <div className="portfolio-text">
              <h1 className="portfolio-title">{titel}</h1>
              <div className="tools-icons">
                {verktygsIkoner && verktygsIkoner.length > 0 ? (
                  verktygsIkoner.map((ikon, index) => (
                    <img
                      key={index}
                      src={ikon.file.url}
                      alt={ikon.title}
                      className="tool-icon"
                    />
                  ))
                ) : (
                  <p>Inga verktygsikoner tillgängliga</p>
                )}
              </div>
              <p className="portfolio-description">
                {beskrivning?.beskrivning || "Ingen beskrivning tillgänglig."}
              </p>
              <Link to="/portfolio" className="back-link">
                <button className="back-button">Back</button>
              </Link>
            </div>
          </div>
        </div>
      </motion.main>
    </Layout>
  );
};

export default PortfolioItemTemplate;

export const query = graphql`
  query ($slug: String!) {
    contentfulProjekt(slug: { eq: $slug }) {
      titel
      bild {
        gatsbyImageData(layout: CONSTRAINED, width: 800, placeholder: BLURRED)
      }
      beskrivning {
        beskrivning
      }
      verktygsIkoner {
        title
        file {
          url
        }
      }
    }
  }
`;
