import React from 'react';
import "./Hero.scss" ;
import Typist from 'react-typist';


export default function Hero() {
    return (
      <>
        <section
          id="home"
          className="tt-fullHeight"
          data-stellar-vertical-offset={50}
          data-stellar-background-ratio="0.2"
        >
          <div className="welcome-container" >
            <div className="beautiful" id="WE">WE</div>
            <div className="beautiful"  id="L">L</div>
            <div className="beautiful"  id="CO">CO</div>
            <div className="beautiful"  id="ME">ME 👳</div>
          </div>
          <div className="intro">
            <h4>
            <Typist
              cursor={{ hideWhenDone: true }}
            >
              ~ I'm Mohamed 😃
              
              <Typist.Delay ms={1250} />
              <br /><br />
                ~ I'm a WEBDEVELO<Typist.Delay ms={50} />PER
              <Typist.Backspace count={9} delay={1000} />
              <Typist.Delay ms={750} />
              <span style={{color:'hotpink'}} >DESIGNER too ✍</span>
              <Typist.Delay ms={1250} />
              <br /><br />
              ~ I love : <span style={{color:'hotpink'}} >Javascript , ReactJS and NodeJS 😍</span> 
               <Typist.Delay ms={1250} />
              <br /><br />
               <a href="#" style={{color:'hotpink'}}>~ Moto: Knowledge without sharing is nothing ✌</a> 
              <Typist.Delay ms={1250} />
              <br /><br />
              <span> <a href="#" className="flash">👇</a></span>
              <br />
              {''}
            </Typist>
            </h4>
          </div>
        </section>
      </>  )
}
