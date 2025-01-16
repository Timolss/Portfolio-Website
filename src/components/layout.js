import React from "react";
import { Link } from "gatsby";
import {
  container,
  header,
  navigation,
  navigationList,
  mainContent,
  footer,
} from "../styles/layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={container}>
      <header className={header}>
        <nav className={navigation}>
          <ul className={navigationList}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/portfolio">Projects</Link>
            </li>
            <li>
              <Link to="/about-me">About me</Link>
            </li>
            <li>
              <Link to="/contact-page">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className={mainContent}>{children}</main>
      <footer className={footer}>
        <p>Copyright © 2025 Timolss. All rights reserved.</p>
      </footer>
    </div>
  );
};

export const Head = () => <title>Hem</title>;

export default Layout;
