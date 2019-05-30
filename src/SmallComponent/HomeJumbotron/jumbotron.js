import React from "react";
import {
  MDBJumbotron,
  MDBContainer,
  MDBFormInline,
  MDBIcon,
  MDBCol, MDBBtn
} from "mdbreact";
import "./style.css";
const JumbotronPage = () => {
  return (
    <MDBContainer
      fluid
      
      className="landing"
    >
      <h2 className="display-4 text-center">Fluid jumbotron</h2>
      <p className="lead text-center">
        This is a modified jumbotron that occupies the entire horizontal space
        of its parent.
      </p>
      <MDBCol md="6" style={{margin:'0px auto'}}>
        <MDBFormInline className="md-form">
          <MDBIcon icon="search" />
          <input
            className="form-control form-control-sm ml-3 w-75"
            type="text"
            placeholder="Search Companies"
            aria-label="Search"
          />
        <MDBBtn outline color="info">Go</MDBBtn>
        </MDBFormInline>
      </MDBCol>
    </MDBContainer>
  );
};

export default JumbotronPage;
