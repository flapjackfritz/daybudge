import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class InputSpend extends Component {

  render() {
    return (
      <div>
        <Button bsStyle="primary">Enter Amount</Button>
        <Button>Clear</Button>
      </div>
    );
  }

}

export default InputSpend;
