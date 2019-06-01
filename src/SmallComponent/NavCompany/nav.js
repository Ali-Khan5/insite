import React from "react";

import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import './style.css'
export default () => (
  

    <MDBNav className="nav-pills nav-justified" style={{backgroundColor:'blue',padding:'10px 5px'}}>
      <MDBNavItem>
        <MDBNavLink  to="#!" >Overview</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink to="#!">Review</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink to="#!">Photos</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink  active to="#!">Add Review </MDBNavLink>
      </MDBNavItem>
     
    </MDBNav>

);