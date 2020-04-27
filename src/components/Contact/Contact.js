import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import './Contact.scss'

export default class Contact extends Component {
    render() {
        return (
        <section className="contact">
             <div className="section-title-skills" >
             
               <span className="gradient-text" >
                   Write Me </span> ✍
            </div>   
            <MDBContainer>
              <MDBRow>
                <MDBCol md="6">
                <form>
                   
                    <div className="white-text"style={{transform: "translateX(50%)"}} >
                    <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
                        success="right" />
                    <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
                        success="right" />
                    <MDBInput label="Subject" icon="tag" group type="text" validate error="wrong" success="right" />
                    <MDBInput type="textarea" rows="2" label="Your message" icon="pencil-alt" />
                    </div>
                    <div className="text-center" style={{transform: "translateX(50%)"}} >
                    <MDBBtn className="btn btn-outline-purple" color="secondary">
                        Send
                        <MDBIcon far icon="paper-plane" className="ml-1" />
                    </MDBBtn>
                    </div>
                </form>
                </MDBCol>
      </MDBRow>
</MDBContainer>
            
        </section>
        )
    }
}
