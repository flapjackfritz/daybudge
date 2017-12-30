import React, { Component } from 'react';
import { Button, Form, FormGroup, InputGroup, FormControl, ControlLabel } from 'react-bootstrap';

class InputAmount extends Component {

  render() {
    return (
      <Form>
        <FormGroup>
          <InputGroup>
            <InputGroup.Addon>$</InputGroup.Addon>
            <FormControl type="number" />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <InputGroup>
            <ControlLabel>Category</ControlLabel>
            <FormControl componentClass="select" placeholder="Category">
              <option value="none">None</option>
              <option value="food">Food</option>
              <option value="entertainment">Entertainment</option>
              <option value="other">Other</option>
            </FormControl>
          </InputGroup>
        </FormGroup>

        <Button bsStyle="primary">Enter Amount</Button>
        <Button>Clear</Button>
      </Form>
    );
  }

}

export default InputAmount;
