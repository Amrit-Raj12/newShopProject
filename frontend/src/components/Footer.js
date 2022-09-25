import React from "react";
import { Container, Row } from "react-bootstrap";
import "./FooterStyle.css";
import logo from './logo.png';


const Footer = () => {
  return (
    <Container>
      <hr />
      <Row>
        <div className="footer">
          <div className="heading">
            <h2>
            <img src={logo} width="50" alt="logo" />  ShopSite<sup>&trade;</sup>
            </h2>
          </div>
          <div style={{ marginLeft: "15px" }} className="content">
            <div className="services">
              <h4>Company</h4>
              <p>
                <a href="#">Shipping</a>
              </p>
              <p>
                <a href="#">Return Policy</a>
              </p>
              <p>
                <a href="#">Work With Us</a>
              </p>
              <p>
                <a href="#">Terms & Conditions</a>
              </p>
            </div>
            <div style={{ marginLeft: "15px" }} className="social-media">
              <h4>Follow Us Out There</h4>
              <p>
                <a href="/">
                  <i className="fab fa-facebook"></i> Facebook
                </a>
              </p>
              <p>
                <a href="/">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </p>
              <p>
                <a href="/">
                  <i className="fab fa-pinterest"></i> Pinterest
                </a>
              </p>
              <p>
                <a href="/">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </p>
            </div>
            <div style={{ marginLeft: "15px" }} className="links">
              <h4 style={{ marginLeft: "15px" }}>Thank You</h4>
              <p>
                Thank you to the wonderful folks over
                <br />
                at Herbivore for letting us use their <br />
                beautiful imagery in this demo. Head over to their store to shop
                their full catalog of amazing products.
              </p>
            </div>
            <div style={{ marginLeft: "15px" }} className="details">
              <section className="newsletter-section">
                <h4 className="title">Newsletter</h4>
                <div className="input-wrapper">
                  <label for="newsletter" className="label-text">
                    Enter your Email to Join
                  </label>
                  <input type="text" id="newsletter" />
                  <button className="btn arrow-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="bi bi-arrow-right-short"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                      />
                    </svg>
                  </button>
                </div>
              </section>
            </div>
          </div>
          <footer>
            <hr />
            &copy; 2021 ShopSite.
          </footer>
        </div>
      </Row>
    </Container>
  );
};

export default Footer;
