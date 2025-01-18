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
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            quality: 80
          )
          title
        }
        verktygsIkoner {
          title
          file {
            url
          }
        }
      }
    }
  `);

  const presentationstext =
    data.contentfulStartsida.presentationstext.presentationstext;
  const title = data.contentfulStartsida.title;
  const image = getImage(data.contentfulStartsida.bild);
  const verktygsIkoner = data.contentfulStartsida.verktygsIkoner;

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
            <p className="hello">Hey, I'm</p>
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

      {verktygsIkoner && verktygsIkoner.length > 0 && (
        <motion.section
          className="technologies"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h3>Technologies I'm working with</h3>
          <div className="technologies-container">
            {verktygsIkoner.map((icon, index) => (
              <div key={index} className="technology-icon">
                <img
                  src={icon.file.url}
                  alt={icon.title}
                  className="icon-image"
                />
              </div>
            ))}
          </div>
        </motion.section>
      )}
    </Layout>
  );
};

export const Head = () => <Seo title="Hem" />;

export default IndexPage;
