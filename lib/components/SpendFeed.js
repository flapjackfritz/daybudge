import React, { Component } from 'react';

import SpendFeedItem from './SpendFeedItem';
import { penniesToDollars } from 'helpers/displayNumbers';

class SpendFeed extends Component {

  render() {
    const options = {};
    options.timeZone = 'UTC';
    options.timeZoneName = 'short';

    return (
      <div>
        <h3>Spending Feed<br /><small>{(new Date()).toLocaleDateString('en-NZ')}</small></h3>

        {this.props.spendingItems.map((spendingItem) =>
          <SpendFeedItem
            key={spendingItem.id}
            id={spendingItem.id}
            header={spendingItem.kind}
            amount={penniesToDollars(spendingItem.amount)}
            location={spendingItem.location}
            time={(new Date(spendingItem.datetime)).toLocaleTimeString('en-NZ')}
          />
        )}
      </div>
    );
  }

}

export default SpendFeed;
