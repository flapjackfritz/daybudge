import React, { Component } from 'react';

import SpendFeedItem from './SpendFeedItem';
import { penniesToDollars } from 'helpers/displayNumbers';

class SpendFeed extends Component {

  render() {
    return (
      <div>
        <h3>Spending Feed<br /><small>13 December 2017</small></h3>

        {this.props.spendingItems.map((spendingItem) =>
          <SpendFeedItem
            key={spendingItem.id}
            id={spendingItem.id}
            header={spendingItem.kind}
            amount={penniesToDollars(spendingItem.amount)}
            location={spendingItem.location}
            time={spendingItem.datetime}
          />
        )}
      </div>
    );
  }

}

export default SpendFeed;
