import React from "react";
import Seo from "../components/seo";
import { motion } from "framer-motion";
import Layout from "../components/layout";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "../styles/about-me.css";

const AboutMePage = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulOmMig {
        titel
        beskrivning {
          beskrivning
        }
        bild {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  `);

  const { titel, beskrivning, bild } = data.contentfulOmMig;
  const image = getImage(bild);

  return (
    <Layout>
      <motion.div
        className="about-me-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="about-me-image">
          <GatsbyImage image={image} alt={titel} />
        </div>
        <div className="about-me-content">
          <h1>{titel}</h1>
          {beskrivning.beskrivning.split("\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </motion.div>
    </Layout>
  );
};

export const Head = () => <Seo title="About Me"></Seo>;

export default AboutMePage;
