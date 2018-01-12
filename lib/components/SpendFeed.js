import React from 'react';
import SpendFeedItem from './SpendFeedItem';

const SpendFeed = ({
  spendingItems,
  onItemButtonClick
}) => (
  <div>
    <h3>Spending Feed<br /><small>{(new Date()).toLocaleDateString('en-NZ')}</small></h3>

    {spendingItems.map((spendingItem) =>
      <SpendFeedItem
        key={spendingItem.id}
        {...spendingItem}
        buttonText="Delete"
        onClick={() => onItemButtonClick(spendingItem.id)}
      />
    )}
  </div>
);

export default SpendFeed;
