import React, { PureComponent } from 'react';

import SpendFeedItem from './SpendFeedItem';
import { penniesToDollars } from 'helpers/displayNumbers';

class SpendFeed extends PureComponent {

  render() {
    return (
      <div>
        <h3>Spending Feed<br /><small>13 December 2017</small></h3>

        {Object.entries(this.props.spendingItems).map((spendingItemObject) =>
          <SpendFeedItem
            key={spendingItemObject[0]}
            header={spendingItemObject[1].kind}
            amount={penniesToDollars(spendingItemObject[1].amount)}
            location={spendingItemObject[1].location}
            time={spendingItemObject[1].time}
          />
        )}


      </div>
    );
  }

}

export default SpendFeed;
