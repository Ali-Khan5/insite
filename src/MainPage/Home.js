import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import HomeJumbotron from "../SmallComponent/HomeJumbotron/jumbotron";
import About from "../SmallComponent/AboutSection/about"

class Home extends Component {
  state = {};
  render() {
    return (
      
        <MDBContainer fluid>
       
           
              <HomeJumbotron />
            <br/>

          <About/>
          <br/>
        </MDBContainer>
     
    );
  }
}
export default Home;
