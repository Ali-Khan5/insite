import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBSelect, MDBBtn } from "mdbreact";
// import "./style.css"
import SelectComponent from "../SmallComponent/InputForm/SelectBox";
// import SelectField from "../SmallComponent/InputForm/SelectBox";
import TextareaPage from "../SmallComponent/InputForm/TextArea";

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
          <MDBCol md="8" style={{  }}>
            {/* <h4 className="text-center"> advertisment</h4> */}
            <img  className="img-fluid "src={'https://res.cloudinary.com/dcw1i97ph/image/upload/v1559319433/61530373_421228672049870_3598138457433571328_n_oqpp1f.png'} style={{width:'100%'}} />
          </MDBCol>
          <MDBCol />
        </MDBRow>
        <MDBRow style={{ margin: "10px" }}>
      <MDBCol></MDBCol>
          <MDBCol md="7">
            <h4>Company On Board</h4>
            <MDBRow style={{marginTop:'10px'}}>
              <MDBCol md="6">
                {" "}
                <h6>Company Name : </h6>
              </MDBCol>
              <MDBCol md="6">
                <div className="form-group">
                  <input type="text" className="form-control" />
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow style={{marginTop:'10px'}}>
              <MDBCol md="6">
                {" "}
                <h6>Do you currently work there? :</h6>
              </MDBCol>
              <MDBCol md="6">
                <SelectComponent />
              </MDBCol>
            </MDBRow>
            <MDBRow style={{marginTop:'10px'}}>
              <MDBCol md="6">
                {" "}
                <h6>Would you recommend this company to a friend?  :</h6>
              </MDBCol>
              <MDBCol md="6">
                <SelectComponent />
              </MDBCol>
            </MDBRow>
            <MDBRow style={{marginTop:'10px'}}>
              <MDBCol md="6">
                {" "}
                <h6>Have you experienced or witnessed Gender Bias within the company?  :</h6>
              </MDBCol>
              <MDBCol md="6">
                <SelectComponent />
              </MDBCol>
            </MDBRow>
            <TextareaPage LabelFor={"If yes, please give an example :"} />
            <MDBRow style={{marginTop:'10px'}}>
              <MDBCol md="6">
                {" "}
                <h6>Have you experienced or witnessed Religious Bias within the company? :</h6>
              </MDBCol>
              <MDBCol md="6">
                <SelectComponent />
              </MDBCol>
            </MDBRow>
            <TextareaPage LabelFor={"If yes, please give an example :"} />

            <MDBRow style={{marginTop:'10px'}}>
              <MDBCol md="6">
                {" "}
                <h6>Have you experienced or witnessed Racial Bias within the company?  :</h6>
              </MDBCol>
              <MDBCol md="6">
                <SelectComponent />
              </MDBCol>
            </MDBRow>
                 <TextareaPage LabelFor={"If yes, please give an example :"} />
                 <TextareaPage LabelFor={"What are the pros of working at this company? :"} />
                 <TextareaPage LabelFor={"What are the cons of working at this company? :"} />
            <MDBRow>
              <MDBBtn color="primary">Submit</MDBBtn>
            </MDBRow>
          </MDBCol>
          <MDBCol
            md="3"
            style={{
              height: "100%",
              padding:'0 5%'
            }}
          >
            {" "}
            <img src="https://res.cloudinary.com/dcw1i97ph/image/upload/v1559196004/adsecond_uylr2t.png" className='img-fluid' style={{height:'100%'}}  />
          </MDBCol>
          <MDBCol />
        </MDBRow>
        <br/>
        <br/>
      </MDBContainer>
    );
  }
}

export default SignUpPage;
