import React, { PureComponent } from 'react';

import SpendFeedItem from './SpendFeedItem';
import { penniesToDollars } from 'helpers/displayNumbers';

class SpendFeed extends PureComponent {

  render() {
    return (
      <div>
        <h3>Spending Feed<br /><small>13 December 2017</small></h3>

        {Object.values(this.props.spendingItems).map((spendingItem) =>
          <SpendFeedItem
            key={spendingItem.id}
            header={spendingItem.kind}
            amount={penniesToDollars(spendingItem.amount)}
            location={spendingItem.location}
            time={spendingItem.time}
          />
        )}

      </div>
    );
  }

}

export default SpendFeed;
