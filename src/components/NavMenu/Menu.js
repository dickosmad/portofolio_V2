import React, { Component } from 'react'
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse } from "mdbreact";
import { HashLink as Link } from 'react-router-hash-link'
import {BrowserRouter as Router } from 'react-router-dom';
import logo from '../../assets/images/code_drop.png'
import "./Menu.scss"


export default class Menu extends Component {
    state = {
        isOpen: false
      };
      
      toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
      }
      
      render() {
        return (
          <Router>
            <MDBNavbar color="nice-gradient" fixed="top"  dark expand="md">
              <MDBNavbarBrand>
                <img src={logo} alt="Code_drop" />
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={this.toggleCollapse} />
              <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                <MDBNavbarNav>
                  <MDBNavItem active>
                    <Link className='nav-link' to="/#app">Home</Link>
                  </MDBNavItem>
                  <MDBNavItem>
                   <Link smooth className='nav-link' to="/#about">About Me</Link>
                  </MDBNavItem>
                  <MDBNavItem>
                    <Link smooth className='nav-link' to="/#skill">Skills</Link>
                  </MDBNavItem>
                  <MDBNavItem>
                    <Link smooth className='nav-link'  to="/#project">Projects</Link>
                  </MDBNavItem>
                  <MDBNavItem>
                    <Link  smooth className='nav-link' to="#!">Blog</Link>
                  </MDBNavItem>
                  <MDBNavItem>
                    <Link  smooth className='nav-link' to="#/contact">Contact Me</Link>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </Router>
          );
        }
}
