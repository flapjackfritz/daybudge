import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

class SpendFeed extends Component {

  render() {
    return (
      <div>
        <Panel header="Dominos">
          Spent $12.51 at Dominos at 12:34pm
        </Panel>
        <Panel header="Unichem">
          Spent $43.23 at Unichem at 9:33am
        </Panel>
      </div>
    );
  }

}

export default SpendFeed;
