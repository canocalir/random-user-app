import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-div">
      <a
        href="https://github.com/canocalir"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <code className="brand">{"< Can Ocalir 2022© />"}</code>
      </a>
    </div>
  );
};

export default Footer;
