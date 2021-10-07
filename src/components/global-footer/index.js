import React from "react";
import "./style.scss";

function GlobalFooter() {
  return (
    <footer>
      <div className="footer-container">
        <p className="footer-copyright">
          © {new Date().getFullYear()}{" "}
          <a
            className="link"
            href="https://github.com/iamhayoung/iamhayoung.github.io"
          >
            hayoung.life
          </a>
          <span className="icon-heart">💚</span>
        </p>
        <ul className="footer-link-list">
          <li className="footer-link-item">
            <a className="link" href="https://github.com/iamhayoung">
              GitHub
            </a>
          </li>
          <li className="footer-link-item">
            <a className="link" href="mailto:hahhyoung@gmail.com">
              Mail
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default GlobalFooter;
