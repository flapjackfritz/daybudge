import React, { PureComponent } from 'react';

import SpendFeedItem from './SpendFeedItem';
import { penniesToDollars } from 'helpers/displayNumbers';

class SpendFeed extends PureComponent {


  render() {
    const spendFeedItems = Object.entries(this.props.spendingItems)
      .map((SpendingItemEntry) => {
        const spendingItem = SpendingItemEntry[1];
        const spendingItemId = SpendingItemEntry[0];

        return (
          <SpendFeedItem
            key={spendingItemId}
            header={spendingItem.kind}
            amount={penniesToDollars(spendingItem.amount)}
            location={spendingItem.location}
            time={spendingItem.time}
          />);
      });

    return (
      <div>
        <h3>Spending Feed<br /><small>13 December 2017</small></h3>

        {spendFeedItems}

      </div>
    );
  }

}

export default SpendFeed;
