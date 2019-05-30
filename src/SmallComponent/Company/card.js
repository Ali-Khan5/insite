import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,MDBNavLink
} from "mdbreact";

const CardExample = props => {
  return (
   
      <MDBCard style={{ width: "100%",height:'100%' }}>
        <MDBCardBody>
          <MDBCardTitle>{props.Title}</MDBCardTitle>
          <MDBCardText>
          <MDBNavLink  color="primary" to={`/company/${props.Title}`}> <MDBBtn> View Company </MDBBtn></MDBNavLink>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    
  );
};

export default CardExample;
