import React from "react";
import Layout from "../../components/layout";
import { Link, graphql, useStaticQuery } from "gatsby";
import Seo from "../../components/seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";
import "../../styles/portfolio-page.css";

const PortfolioPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProjekt {
        nodes {
          titel
          slug
          beskrivning {
            beskrivning
          }
          bild {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
      }
    }
  `);

  const items = data.allContentfulProjekt.nodes;

  return (
    <Layout>
      <motion.main
        initial={{ x: 1000, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.56 }}
      >
        <h1>My projects</h1>
        <ul>
          {items.map((item) => {
            const image = getImage(item.bild);
            return (
              <li key={item.slug} className="portfolio-item">
                <div className="portfolio-item-text">
                  <h2>{item.titel}</h2>
                  <p>{item.beskrivning.beskrivning}</p>
                </div>
                <Link
                  to={`/portfolio/${item.slug}`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="portfolio-item-content">
                    <GatsbyImage
                      image={image}
                      alt={item.titel}
                      className="portfolio-item-image"
                    />
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </motion.main>
    </Layout>
  );
};

export const Head = () => <Seo title="Portfolio"></Seo>;

export default PortfolioPage;
