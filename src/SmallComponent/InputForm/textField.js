import React from "react";
import {MDBInput} from "mdbreact";

// import "./style.css"
const App = (props) => {
  return (
    <MDBInput  label={props.formLabel}   onChange={props.changeState}
    value={props.stateName}
    name={props.Name}/>
 
  )
}

export default App;