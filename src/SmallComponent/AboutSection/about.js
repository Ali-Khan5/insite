import React from "react";
import Imagehome from "../../home.jpg"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import "./style.css";
const App = () => {
  
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="7">
          <p style={{padding:'20px 40px'}}>
            church-key viral twee Helvetica chia actually PBR Neutra crucifix
            biodiesel cred semiotics blog messenger bag aesthetic tote bag ugh
            disrupt locavore bespoke Portland sartorial 90's cornhole seitan
            PBR&B meggings Kickstarter Wes Anderson synth High Life literally
            meh Pitchfork 8-bit normcore Tonx put a bird on it wayfarers vegan
            narwhal distillery occupy cliche Etsy Williamsburg mustache retro
            Blue Bottle umami craft beer Bushwick pork belly next level Banksy
            Godard pop-up slow-carb paleo +1 skateboard iPhone tattooed Tumblr
            g
          </p>
        </MDBCol>
        <MDBCol md="5" offset="1" >
        <img src={Imagehome} style={{width:'100%'}}/>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default App;
