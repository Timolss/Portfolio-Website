import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { graphql, useStaticQuery } from "gatsby";
import "../styles/contact-page.css";
import LinkedInIcon from "../images/linkedin-icon.svg";
import InstagramIcon from "../images/instagram-icon.svg";
import GitHubIcon from "../images/github-icon.svg";
import MailIcon from "../images/mail-icon.svg";
import PhoneIcon from "../images/phone-icon.svg";

const ContactPage = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulKontakt {
        email
        linkedInUrl
        instagramUrl
        gitHubUrl
      }
    }
  `);

  const { email, linkedInUrl, instagramUrl, gitHubUrl } =
    data.contentfulKontakt;

  return (
    <Layout>
      <div className="welcome-text">
        <h2>Hello there!</h2>
        <p>
          If you're interested in collaborating or have any questions regarding
          my work, don't hesitate to reach out!
        </p>
      </div>
      <div className="contact-container">
        <div className="contact-form">
          <h2>Get in Touch</h2>
          <form name="contact" method="POST">
            <input type="text" name="name" placeholder="Your Name" required />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea name="message" placeholder="Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="contact-info">
          <div className="phone-email">
            <div className="phone">
              <img src={PhoneIcon} alt="Phone" />
              <p>076-653 53 33</p>
            </div>
            <div className="email">
              <img src={MailIcon} alt="Email" />
              <a href={`mailto:${email}`}>{email}</a>
            </div>
          </div>
          <div className="social-links">
            <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
              <img src={LinkedInIcon} alt="LinkedIn" />
            </a>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
              <img src={InstagramIcon} alt="Instagram" />
            </a>
            <a href={gitHubUrl} target="_blank" rel="noopener noreferrer">
              <img src={GitHubIcon} alt="GitHub" />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Contact"></Seo>;

export default ContactPage;
