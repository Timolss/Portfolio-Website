import { Link, graphql, useStaticQuery } from "gatsby";
import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";
import Layout from "../components/layout";
import Seo from "../components/seo";
import "../styles/startsida.css";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulStartsida {
        presentationstext {
          presentationstext
        }
        title
        bild {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          title
        }
      }
    }
  `);

  const presentationstext =
    data.contentfulStartsida.presentationstext.presentationstext;
  const title = data.contentfulStartsida.title;
  const image = getImage(data.contentfulStartsida.bild);

  return (
    <Layout>
      <header className="hero">
        <div className="hero-container">
          <motion.div
            className="text-content"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="hello">Hi, my name is</p>
            <h1>{title}</h1>
            <h2>Frontend Developer.</h2>
            <p>
              {presentationstext.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
            <Link to="/portfolio" className="btn">
              Check out My Projects
            </Link>
          </motion.div>
          {image && (
            <motion.div
              className="image-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <GatsbyImage
                image={image}
                alt={data.contentfulStartsida.bild.title}
              />
            </motion.div>
          )}
        </div>
      </header>
    </Layout>
  );
};

export const Head = () => <Seo title="Hem" />;

export default IndexPage;
