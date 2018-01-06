import React, { PureComponent } from 'react';

import SpendFeedItem from './SpendFeedItem';

class SpendFeed extends PureComponent {

  render() {
    return (
      <div>
        <h3>Spending Feed<br /><small>13 December 2017</small></h3>

        <SpendFeedItem header="Dominos" amount="$12.51" time="12:34pm" />
        <SpendFeedItem header="Unichem" amount="$43.23" time="9:33am" />

      </div>
    );
  }

}

export default SpendFeed;
