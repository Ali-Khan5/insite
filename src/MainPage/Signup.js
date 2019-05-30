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
          <MDBCol md="8" style={{ border: "2px solid black", padding: "2%" }}>
            <h4 className="text-center"> advertisment</h4>
          </MDBCol>
          <MDBCol />
        </MDBRow>
        <MDBRow style={{ margin: "10px" }}>
          <MDBCol
            md="2"
            style={{
              border: "2px solid black",
              padding: "20% 2%",
              height: "80vh"
            }}
          >
            {" "}
            <h4 className="text-center"> advertisment</h4>{" "}
          </MDBCol>
          <MDBCol md="8">
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
          <MDBCol />
        </MDBRow>
       
      </MDBContainer>
    );
  }
}

export default SignUpPage;
