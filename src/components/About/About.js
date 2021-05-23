import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import { HashLink as Link } from "react-router-hash-link";
import {
  FaLinkedinIn,
  FaGithub,
  FaFreeCodeCamp,
  FaInstagram,
} from "react-icons/fa";
import "./About.scss";
import profile from "../../assets/images/about_me.jpg";

export default function About() {
  return (
    <section className="about" id="about">
      <MDBContainer>
        <MDBRow>
          <MDBCol sm="8">
            <div className="section-title">
              <div className="section-subtitle">About Me</div>
            </div>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol xs="12" sm="12" md="12" lg="6">
            <div className="about-box">
              <div className="box-overlay"></div>
              <a href="https://github.com/dickosmad" target="blank">
                <img src={profile} alt="" />
              </a>
            </div>
          </MDBCol>
          <MDBCol sm="12" md="12" lg="6" xs="12">
            <div className="about-item">
              <p>
                My name is{" "}
                <a
                  href="https://www.linkedin.com/in/mohamed-assalla-dicko-ba0892b7/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="underline">Mohamed Assalla Dicko </span>
                </a>
                <br />
                Great fan of web development and website improving. <br />
                I'm currently working on{" "}
                <a
                  href="https://firebase.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="underline">Firebase</span>
                </a>{" "}
                and
                <a href="https://reactjs.org/">
                  <span className="underline" target="_blank">
                    {" "}
                    ReactJS
                  </span>
                </a>{" "}
                projects.
                <br />
                I'm learning{" "}
                <a
                  href="https://www.gatsbyjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="underline">Gatsby JS</span>
                </a>{" "}
                and improving my NodeJS Skills . <br />
                All the JS stuff is my daily bread-and butter .
              </p>

              <Link smooth className="nav-link" to="/#project">
                <MDBBtn gradient="peach" href={""}>
                  See My Work
                </MDBBtn>
              </Link>

              <MDBRow>
                <MDBCol xs="12" md="12" lg="12" sm="12">
                  <div style={{ paddingTop: 40 }} className="social-icons">
                    <p>
                      {" "}
                      <span>Find me </span>:
                      <a href="https://www.linkedin.com/in/mohamed-assalla-dicko-ba0892b7/">
                        <FaLinkedinIn size="1.5rem" />
                      </a>
                      <a href="https://github.com/dickosmad" target="blank">
                        <FaGithub size="1.5rem" />
                      </a>
                      <a href="https://github.com/dickosmad">
                        <FaFreeCodeCamp size="1.5rem" />
                      </a>
                      <a href="https://github.com/">
                        <FaInstagram size="1.5rem" />
                      </a>
                    </p>
                  </div>
                </MDBCol>
              </MDBRow>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
