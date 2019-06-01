import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBSelect, MDBBtn } from "mdbreact";
import ReviewCard from "../SmallComponent/Review/ReviewComponent";
import TabNavigation from "../SmallComponent/NavCompany/nav";
class CompanyHome extends Component {
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
      `https://damp-springs-38576.herokuapp.com/getCompany?name=${
        this.props.match.params.name
      }`
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
          <MDBCol md="8">
            <MDBRow>
              <MDBCol md="3">
                {this.state.data.info ? (
                  <img
                    src={this.state.data.info.imageUrl}
                    className="img-fluid"
                  />
                ) : (
                  <div
                    style={{
                      backgroundColor: "black",
                      height: "100px",
                      width: "100%"
                    }}
                  >
                    aa
                  </div>
                )}
              </MDBCol>
              <MDBCol md="8">
                <h2>
                  {this.state.data
                    ? this.state.data.companyName
                    : "companyName"}
                </h2>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="3" />
              <MDBCol md="8">
                <TabNavigation />
              </MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBCol md="3" />
              <MDBCol md="8">
                <br />
                <br />
                <MDBRow>
                  <MDBCol md="6">
                    <h6>
                      Website:{" "}
                      <span>
                        <a href="#">
                          {this.state.data.info ? (
                            this.state.data.info.officalWebsite ? (
                              this.state.data.info.officalWebsite
                            ) : (
                              <span>www.example.com</span>
                            )
                          ) : (
                            <span>www.example.com</span>
                          )}
                        </a>
                      </span>
                    </h6>
                    <h6>
                      Company Size :{" "}
                      <span>
                        {this.state.data.info
                          ? this.state.data.info.companySize
                            ? this.state.data.info.companySize
                            : "not available"
                          : "not available"}
                      </span>
                    </h6>
                    <h6>
                      Location:{" "}
                      <span>
                        {this.state.data.info
                          ? this.state.data.info.location
                            ? this.state.data.info.location
                            : "not available"
                          : "not available"}
                      </span>
                    </h6>
                    <h6>
                      Founded :{" "}
                      <span>
                        {this.state.data.info
                          ? this.state.data.info.founded
                            ? this.state.data.info.founded
                            : "not available"
                          : "not available"}
                      </span>
                    </h6>
                  </MDBCol>
                  <MDBCol md="6">
                    <div style={{ border: "2px solid black", padding: "10px" }}>
                      <h4>About</h4>
                      {this.state.data.info ? (
                        this.state.data.info.about ? (
                          this.state.data.info.about
                        ) : (
                          <p>
                            selvage messenger bag brunch deep v mixtape
                            pour-over Bushwick irony pork belly Thundercats
                            pickled normcore bespoke Kickstarter post-ironic
                            biodiesel master cleanse mustache freegan disrupt
                            ugh crucifix retro shabby chic meh skateboard Blue
                            Bottle raw denim trust fund
                          </p>
                        )
                      ) : (
                        <p>
                          selvage messenger bag brunch deep v mixtape pour-over
                          Bushwick irony pork belly Thundercats pickled normcore
                          bespoke Kickstarter post-ironic biodiesel master
                          cleanse mustache freegan disrupt ugh crucifix retro
                          shabby chic meh skateboard Blue Bottle raw denim trust
                          fund
                        </p>
                      )}
                    </div>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol md="6">
                    <h6>
                      Male / Female Ratio :{" "}
                      <span>
                        {" "}
                        {this.state.data
                          ? this.state.data.reviews["0"].maleToFemaleRatio
                          : "5"}
                      </span>
                    </h6>
                    <h6>
                      Separate Washroom :{" "}
                      <span>
                        {" "}
                        {this.state.data
                          ? this.state.data.reviews["0"].genderWashrooms
                          : "not available"}
                      </span>
                    </h6>
                    <h6>
                      Office Space :{" "}
                      <span>
                        {" "}
                        {this.state.data
                          ? this.state.data.reviews["0"].officeSpace
                          : null}{" "}
                      </span>
                    </h6>
                    <h6>
                      Prayer Area :{" "}
                      <span>
                        {" "}
                        {this.state.data
                          ? this.state.data.reviews["0"].prayerAreaAvailable
                          : null}{" "}
                      </span>
                    </h6>
                    <h6>
                      Cafeteria :{" "}
                      <span>
                        {" "}
                        {this.state.data
                          ? this.state.data.reviews["0"].officeSpace
                          : null}{" "}
                      </span>
                    </h6>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol
            md="2"
            style={{
              
              

            }}
          >
            {" "}
            <img
              src="https://res.cloudinary.com/dcw1i97ph/image/upload/v1559196004/adsecond_uylr2t.png"
              className="img-fluid text-center"
              style={{ height: "100%" }}
            />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol />
          <MDBCol md="8">
            <br />
            <h3> Reviews </h3>
            {this.state.data.reviews
              ? this.state.data.reviews.map(x => {
                  return (
                    <ReviewCard
                      ReviewTitle="can do more "
                      Friend={x.recommendToFriend}
                      Rbias={x.religiousBias}
                      Racialbias={x.racialBias}
                      Cons={x.cons}
                      Pros={x.pros}
                      jobTitle={x.jobTitle}
                      currentlyWorking={x.currentlyWorking}
                    />
                  );
                })
              : null}
            <br />
          </MDBCol>
          <MDBCol />
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default CompanyHome;
