import React from 'react';
import SpendFeedItem from './SpendFeedItem';
import { Button } from 'react-bootstrap';

const SpendFeed = ({
  spendingItems,
  filterDate,
  onRemoveItemButtonClick,
  onBackDayButtonClick,
  onForwardDayButtonClick
}) => (
  <div>
    <h3>Spending Feed<br />
      <small>
        <Button
          onClick={onBackDayButtonClick}
          bsStyle="info">
          {'<<'}
        </Button>
        {(new Date(filterDate)).toLocaleDateString('en-NZ')}
        <Button
          onClick={onForwardDayButtonClick}
          bsStyle="info">
          {'>>'}
        </Button>
      </small>
    </h3>

    {spendingItems.map((spendingItem) =>
      <SpendFeedItem
        key={spendingItem.id}
        {...spendingItem}
        buttonText="Delete"
        onClick={() => onRemoveItemButtonClick(spendingItem.id)}
      />
    )}
  </div>
);

export default SpendFeed;
