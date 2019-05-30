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
   
      <MDBCard style={{ width: "44rem" }}>
        <MDBCardBody>
          <MDBCardTitle>"review title"</MDBCardTitle>
          <MDBCardText>
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
            <h6>Props</h6>
            <p><span style={{fontWeight:'bold'}}> {props.Pros}</span></p>
            <h6>Cons</h6>
            <p><span style={{fontWeight:'bold'}}> {props.Cons}</span></p>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    
  );
};

export default CardExample;
