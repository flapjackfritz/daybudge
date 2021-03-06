import React, { PureComponent } from 'react';
import { ListGroupItem, ListGroup } from 'react-bootstrap';
import { penniesToDollars } from 'helpers/displayNumbers';

class Amounts extends PureComponent {

  render() {
    return (
      <ListGroup>
        <ListGroupItem bsStyle="info">
          Todays Budget: {(new Date).toLocaleDateString('en-NZ')}
        </ListGroupItem>
        <ListGroupItem>
          {
            penniesToDollars(this.props.dailyRemaining)
          } - Remaining Daily Balance
        </ListGroupItem>
        <ListGroupItem>
          {
            penniesToDollars(this.props.spentToday)
          } - Amount Spent Today
        </ListGroupItem>
        <ListGroupItem>
          {
            penniesToDollars(this.props.carryOver)
          } - Carryover from Yesterday
        </ListGroupItem>
      </ListGroup>
    );
  }

}

export default Amounts;
