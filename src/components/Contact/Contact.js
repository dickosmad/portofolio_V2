import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import './Contact.scss'




    const Contact = () => {
    
        return (
        <section className="contact">
             <div className="section-title-skills" >
             
               <span className="gradient-text" >
                   Write Me </span> ✍
            </div>   
            <MDBContainer>
              <MDBRow>
                <MDBCol md="6" lg="6" xs="12">
                    <form className="form-style" >
                   
                    <div className="white-text" >
                    <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
                        success="right" />
                    <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
                        success="right" />
                    <MDBInput label="Subject" icon="tag" group type="text" validate error="wrong" success="right" />
                    <MDBInput type="textarea" rows="2" label="Your message" icon="pencil-alt" />
                    </div>
                    <div className="text-center" >
                    <MDBBtn className="btn btn-outline-purple" color="secondary" style={{fontSize:'1rem'}} >
                        Send
                        <MDBIcon far icon="paper-plane" className="ml-1" />
                    </MDBBtn>
                    </div>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
            
    </section>
    );
    
}

export default  Contact ;
