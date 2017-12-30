import React, { Component } from 'react';

import { Panel } from 'react-bootstrap';

class SpendFeedItem extends Component {

  render() {
    return (
      <Panel header={this.props.header}>
        Spent {this.props.amount } at Unichem at {this.props.time}
      </Panel>
    );
  }

}

export default SpendFeedItem;
