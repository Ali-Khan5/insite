import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol
} from "mdbreact";

const CardExample = props => {
  return (
   
      <MDBCard style={{ width: "100%" }}>
        <MDBCardBody>
          <MDBCardTitle>"review title"</MDBCardTitle>
        
            <div>
          <h6>
              Job Title: <span style={{fontWeight:'bold'}}> {props.jobTitle} </span>
            </h6>
          <h6>
              Currently working: <span style={{fontWeight:'bold'}}> {props.currentlyWorking} </span>
            </h6>
         
            <h6>
              Recommend to a friend: <span style={{fontWeight:'bold'}}> {props.Friend} </span>
            </h6>
            <h6>
              Religious Bias : <span style={{fontWeight:'bold'}}>{props.Rbias}</span >
            </h6>
            <h6>
              Racial Bias : <span style={{fontWeight:'bold'}}>{props.Racialbias}</span >
            </h6>
            <h6>Pros</h6>
            <p><span style={{fontWeight:'bold'}}> {props.Pros}</span></p>
            <h6>Cons</h6>
            <p><span style={{fontWeight:'bold'}}> {props.Cons}</span></p>
            </div>
         
        </MDBCardBody>
      </MDBCard>
    
  );
};

export default CardExample;
