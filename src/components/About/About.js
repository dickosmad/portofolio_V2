import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import { FaLinkedinIn , FaGithub,FaFreeCodeCamp,FaInstagram } from "react-icons/fa";
import './About.scss';
import profile from '../../assets/images/about_me.jpg'

export default function About() {
    return (
        <section className="about">
            <MDBContainer>
                <MDBRow>
                <MDBCol size="6">
                    <div className="section-title" >
                        <div className="section-subtitle" >About Me</div>
                    </div>
                    <div className="about-item" >
                        <p>
                            My name is <a href="https://www.linkedin.com/in/mohamed-assalla-dicko-ba0892b7/" target="_blank" ><span className="underline">Mohamed Assalla Dicko </span></a><br/>
                            Great fan of web developpement and website improving. <br/>
                            I'm currently working on <a href="https://firebase.google.com/" target="_blank"><span className="underline">Firebase</span></a> and 
                            <a href="https://reactjs.org/"><span className="underline" target="_blank"> ReactJS</span></a> projects.<br/>
                            I'm learning <a href="https://www.gatsbyjs.org/" target="_blank" ><span className="underline">Gatsby JS</span></a>  and improving my NodeJS Skills . <br/>
                            All the JS stuff is my daily bread-and butter .
                        </p>
                        <MDBBtn gradient="peach">Learn More</MDBBtn>
                        <div style={{paddingTop:40}} className="social-icons">
                           <p> <span>Find me </span>: 
                            <a><FaLinkedinIn   size="1.5rem" /></a>
                            <a href="https://github.com/dickosmad" target="blank" ><FaGithub size="1.5rem" /></a>
                            <a><FaFreeCodeCamp size="1.5rem"  /></a>
                            <a><FaInstagram size="1.5rem" /></a>
                            </p> 
                        </div>
                    </div>
                </MDBCol>
                <MDBCol sm="4" >
                    <div className="about-box" >
                        <div className="box-overlay" ></div>
                        <a href="https://github.com/dickosmad" target="blank">
                            <img src={profile} alt="" />
                        </a>
                    </div>
                </MDBCol>
                </MDBRow>
        </MDBContainer>
    </section>
        
    )
}
