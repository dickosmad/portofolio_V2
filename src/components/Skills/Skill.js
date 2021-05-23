import React, { Component } from "react";
import { FaReact } from "react-icons/fa";
import { AiOutlineBranches } from "react-icons/ai";
import html from "../../assets/images/html5.svg";
import css from "../../assets/images/css.svg";
import JS from "../../assets/images/js.svg";
import Firebase from "../../assets/images/firebase.svg";
import gatsby from "../../assets/images/gatsby.svg";
import node from "../../assets/images/node.svg";
import mongodb from "../../assets/images/mongodb.svg";
import "./Skill.scss";
import data from "./skillData";

console.log(data);

export default class Skill extends Component {
  state = {
    data: data,
  };
  render() {
    return (
      <section className="skill" id="skill">
        <div className="section-title-skills">
          <p className="gradient-text">
            <AiOutlineBranches size="4.3rem" color="hotpink" />
            SKILLS
          </p>
        </div>
        <div className="skills-container">
          <div className="skill-box">
            <img src={html} alt={"html "} />
          </div>
          <div className="skill-box">
            <img src={css} alt={"css "} />
          </div>
          <div className="skill-box">
            <img src={JS} alt={"JS"} />
          </div>
          <div className="skill-box">
            <img src={Firebase} alt={"Firebase "} />
          </div>
          <div className="skill-box">
            <img src={gatsby} alt={"Gatsby "} />
          </div>
          <div className="skill-box">
            <FaReact size="8rem" color="blue" />
          </div>
          <div className="skill-box">
            <img src={node} alt={"nodeJS"} />
          </div>
          <div className="skill-box">
            <img src={mongodb} alt={"Mongdb"} />
          </div>
        </div>
      </section>
    );
  }
}
