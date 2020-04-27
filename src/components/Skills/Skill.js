import React, { Component } from 'react';
import { FaReact } from "react-icons/fa";
import { DiNodejs,DiFirebase,DiMongodb} from "react-icons/di";
import { AiOutlineBranches} from "react-icons/ai";
import { GrGatsbyjs} from "react-icons/gr";
import htmlCss from '../../assets/images/html_css.png'
import './Skill.scss';


export default class Skill extends Component {
    render() {
        return (
        <section className="skill">
             <div className="section-title-skills" >
               <p className="gradient-text" >
               <AiOutlineBranches size='4.3rem' color='hotpink' />
                   SKILLS</p> 
            </div>
            <div className="skill-box">
                <img src = {htmlCss} />
            </div>
            <div className="skill-box">
                <FaReact size="8rem" color="blue" />
            </div>
            <div className="skill-box">
                <GrGatsbyjs size="8rem" color="purple" />
            </div>
            
            <div className="skill-box">
                <DiFirebase size="8rem" color="goldenrod" />
            </div>
            <div className="skill-box">
                <DiNodejs size="8rem" color='green'  />
            </div>
            <div className="skill-box">
                <DiMongodb size="8rem" color='green'  />
            </div>
            
        </section>
        )
    }
}
