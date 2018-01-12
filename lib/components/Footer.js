import React, { Component } from 'react';
import { isSameDay } from 'helpers/dateHelpers';
import { Button } from 'react-bootstrap';

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onClearStorageButtonClick, onStartNewDayButtonClick } = this.props;
    let newDayButton = null;
    const newDayStartedDate = new Date(this.props.newDayStartedDate);
    const todaysDate = new Date();

    if ( isSameDay(newDayStartedDate, todaysDate) ) {
      // nothing
    } else {
      newDayButton = <Button
        onClick={onStartNewDayButtonClick}
        bsStyle="success">
        New Day! Add $100
      </Button>;
    }

    return (
      <div>
        {newDayButton}
        {'  '}
        <Button
          onClick={() => {
            if(confirm('Are you sure you want to clear everything and start over?'))
            { onClearStorageButtonClick(); }
          }}
          bsStyle="danger">
          Clear Storage
        </Button>
      </div>
    );
  }

}

export default Footer;
