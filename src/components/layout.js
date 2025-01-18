import React, { useState } from "react";
import { Link } from "gatsby";
import Hamburger from "hamburger-react";
import {
  container,
  header,
  navigationList,
  hamburgerButton,
  navigationListMobile,
  mainContent,
  footer,
  mobileMenu,
  mobileMenuOverlay,
  hideMenu,
} from "../styles/layout.module.css";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={container}>
      {/* Header */}
      <header className={header}>
        <div className={hamburgerButton}>
          {" "}
          {/* Använd CSS-modulen här */}
          <Hamburger
            toggled={isOpen}
            toggle={setIsOpen}
            size={24}
            direction="left"
            distance="sm"
            color="#ffffff"
          />
        </div>
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
        <div
          className={`${mobileMenu} ${isOpen ? mobileMenuOverlay : hideMenu}`}
          style={{
            transform: isOpen ? "translateX(0)" : "translateX(-100%)", // Dynamiskt öppna/stänga menyn
          }}
        >
          <nav>
            <ul className={navigationListMobile}>
              <li>
                <Link to="/" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/portfolio" onClick={toggleMenu}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/about-me" onClick={toggleMenu}>
                  About me
                </Link>
              </li>
              <li>
                <Link to="/contact-page" onClick={toggleMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Mobilmeny */}

      {/* Main Content */}
      <main className={mainContent}>{children}</main>

      {/* Footer */}
      <footer className={footer}>
        <p>Copyright © 2025 Timolss. All rights reserved.</p>
      </footer>
    </div>
  );
};

export const Head = () => <title>Hem</title>;

export default Layout;
