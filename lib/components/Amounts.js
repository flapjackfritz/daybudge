import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class Amounts extends Component {

  render() {
    return (
      <ListGroup>
        <ListGroupItem>
          $31.26 - Remaining (daily)
        </ListGroupItem>
        <ListGroupItem>
          $22.02 - Spent Today
        </ListGroupItem>
        <ListGroupItem>
          $22.01 - Carry-Over
        </ListGroupItem>
      </ListGroup>
    );
  }

}

export default Amounts;
