import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBSelect, MDBBtn } from "mdbreact";
import ReviewCard from "../SmallComponent/Review/ReviewComponent";
import TabNavigation from "../SmallComponent/NavCompany/nav";
import BrosweCard from "../SmallComponent/Company/card";

class ViewAllCompanies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      errorMessage: ""
    };
  }
  getPerson = async () => {
    console.log("geting request....");

    const response = await fetch(
      // /fiind/${this.state.FullName}&${this.state.organisation}
      `https://damp-springs-38576.herokuapp.com/getcompanies`
    );

    const body = await response.json();
    console.log(body);
    if (response.status !== 200) {
      // this.setState({errorMessage:body.message});
      throw Error(body.message);
    }
    return body;
  };
  componentDidMount() {
    
      this.getPerson()
        .then(res => this.setState({ data: res }))
        .catch(err => {
          // console.log(err);
          this.setState({ errorMessage: err });
        });
    
  }

  render() {
    return (
      <MDBContainer fluid>
        <br />
        <MDBRow>
        <MDBCol></MDBCol>
            <MDBCol md="9">
            <h2>Company Listing</h2>
            <MDBRow> 
            {this.state.data ? 
                this.state.data.map(x=>{
                    return (
                        <MDBCol md="4" style={{marginTop:'10px'}}> 
                    <BrosweCard Title={x.companyName}/>
                    </MDBCol>)
                })
            : <h4>.......</h4>}
            </MDBRow>
            </MDBCol>
            <MDBCol md="2">
            <img className="img-fluid" style={{height:'80%'}}src={`https://res.cloudinary.com/dcw1i97ph/image/upload/v1559196004/adsecond_uylr2t.png`} />
            </MDBCol>
        </MDBRow>
        <br/>
      </MDBContainer>
    );
  }
}

export default ViewAllCompanies;
