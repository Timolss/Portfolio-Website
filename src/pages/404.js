import React from "react";
import { Link } from "gatsby";
import Seo from "../components/seo";
import "../styles/404-page.css";
import Error from "../images/error.svg";

const NotFoundPage = () => {
  return (
    <div className="page-not-found">
      <img src={Error} alt="404 Page not found" />
      <Link to="/">
        <button>Go Back to Home</button>
      </Link>
    </div>
  );
};

export const Head = () => <Seo title="Not found" />;

export default NotFoundPage;
