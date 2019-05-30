import React, { Component } from 'react';

class SelectPage extends Component {
  render () {
    return(
      <div>
        <select className="browser-default custom-select">
          <option>Choose your option</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
    );
  }
}

export default SelectPage;