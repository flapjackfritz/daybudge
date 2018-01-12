import React from 'react';
import { penniesToDollars } from 'helpers/displayNumbers';

import { Panel, Button } from 'react-bootstrap';

const SpendFeedItem = ({
  onClick,
  kind,
  amount,
  location,
  datetime,
  buttonText
}) => (
  <Panel header={kind}>
    {penniesToDollars(amount)} at {location} at {(new Date(datetime)).toLocaleTimeString()}
    <Button
      bsStyle="primary"
      className="pull-right"
      onClick={onClick}
    >
      {buttonText}
    </Button>
  </Panel>
);

export default SpendFeedItem;
