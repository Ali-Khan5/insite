import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBSelect,MDBBtn } from "mdbreact";
// import "./style.css"
import TextField from "../SmallComponent/InputForm/textField";

class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstName: "",
      LastName: "",
      Email: "",
      Pass: "",
      Pass2: "",
      Country: "",
      City: "",
      EmpStatus: ""
    };
  }
  render() {
    return (
      <MDBContainer fluid>
        <MDBRow style={{ margin: "10px" }}>
          <MDBCol />
          <MDBCol md="8" style={{ padding: "2%" }}>
          <img  className="img-fluid "src={'https://res.cloudinary.com/dcw1i97ph/image/upload/v1559319433/61530373_421228672049870_3598138457433571328_n_oqpp1f.png'} style={{width:'100%'}} />
          </MDBCol>
          <MDBCol />
        </MDBRow>
        <MDBRow style={{ margin: "10px" }}>
        <MDBCol ></MDBCol>
          <MDBCol md="7">
            <h4>Sign Up</h4>
            <MDBRow>
              <MDBCol md="6">
                <TextField formLabel={"First Name"} />
                <TextField formLabel={"Email Address"} />
              </MDBCol>
              <MDBCol md="6">
                <TextField formLabel={"Last Name"} />
              </MDBCol>
            </MDBRow>{" "}
            <MDBRow>
              <MDBCol md="6">
                <TextField formLabel={"Password"} />
                <TextField formLabel={"Country"} />
                <TextField formLabel={"Employement Status"} />
              </MDBCol>
              <MDBCol md="6">
                <TextField formLabel={"City"} />
              </MDBCol>
            </MDBRow>{" "}
            <MDBRow>
        <MDBBtn color="primary">Sign Up</MDBBtn>
        </MDBRow>
          </MDBCol>
          <MDBCol
            md="2"
            style={{
              
              
              height: "80vh"
            }}
          >
            {" "}
            <img className="img-fluid" style={{height:'100%',margin:'0 auto'}} src={`https://res.cloudinary.com/dcw1i97ph/image/upload/v1559196004/adsecond_uylr2t.png`} />
          </MDBCol>
          <MDBCol />
        </MDBRow>
       
      </MDBContainer>
    );
  }
}

export default SignUpPage;
