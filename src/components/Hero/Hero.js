import React from "react";
import "./Hero.scss";
import Typist from "react-typist";
import {
  FaLinkedinIn,
  FaGithub,
  FaFreeCodeCamp,
  FaInstagram,
} from "react-icons/fa";

export default function Hero() {
  return (
    <>
      <section
        id="home"
        className="tt-fullHeight"
        data-stellar-vertical-offset={50}
        data-stellar-background-ratio="0.2"
      >
        <div className="welcome-container">
          <div className="beautiful" id="WE">
            WE
          </div>
          <div className="beautiful" id="L">
            L
          </div>
          <div className="beautiful" id="CO">
            CO
          </div>
          <div className="beautiful" id="ME">
            ME{" "}
            <span role="img" aria-label="guy">
              👳
            </span>{" "}
          </div>
        </div>
        <div className="intro">
          <h4>
            <Typist cursor={{ hideWhenDone: true }}>
              ~ I'm Mohamed{" "}
              <span role="img" aria-label="face-smiling">
                😃
              </span>
              <Typist.Delay ms={1250} />
              <br />
              <br />
              ~ I'm a WEBDEVELO
              <Typist.Delay ms={50} />
              PER
              <Typist.Backspace count={9} delay={1000} />
              <Typist.Delay ms={750} />
              <span style={{ color: "hotpink" }}>
                DESIGNER too{" "}
                <span role="img" aria-label="hand-writing">
                  ✍
                </span>
              </span>
              <Typist.Delay ms={1250} />
              <br />
              <br />~ I love :{" "}
              <span style={{ color: "hotpink" }}>
                Javascript , ReactJS and NodeJS{" "}
                <span role="img" aria-label="love">
                  😍
                </span>
              </span>
              <Typist.Delay ms={1250} />
              <br />
              <br />
              <a href="!#" style={{ color: "hotpink" }}>
                ~ Moto: Knowledge without sharing is nothing{" "}
                <span role="img" aria-label="fingers-up">
                  ✌
                </span>{" "}
              </a>
              <Typist.Delay ms={1250} />
              <div className="contact-icons">
                <p>
                  {" "}
                  <span style={{ color: "white" }}>Find me </span>:
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
              <br />
              <br />
              <span>
                {" "}
                <a href="!#" className="flash">
                  {" "}
                  <span role="img" aria-label="hands-down">
                    👇
                  </span>
                </a>
              </span>
              <br />
              {""}
            </Typist>
          </h4>
        </div>
      </section>
    </>
  );
}
