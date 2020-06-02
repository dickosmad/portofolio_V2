import React, { Component } from 'react'
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from "mdbreact";
    import { BrowserRouter as Router } from 'react-router-dom';
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
            <MDBNavbar color="nice-gradient"  className ="sticky-top" dark expand="md">
              <MDBNavbarBrand>
                <img src={logo} alt="Code_drop" />
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={this.toggleCollapse} />
              <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                <MDBNavbarNav>
                  <MDBNavItem active>
                    <MDBNavLink to="">Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/about">About Me</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/skill">Skills</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!">Projects</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!">Blog</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!">Contact Me</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </Router>
          );
        }
}
