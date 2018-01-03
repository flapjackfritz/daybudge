import React from 'react';

import { Grid, PageHeader } from 'react-bootstrap';

import DisplayAmounts from 'containers/DisplayAmounts';
import AddAmount from 'containers/AddAmount';
import SpendFeed from './SpendFeed';

class App extends React.Component {

  render() {
    return (
      <Grid>
        <PageHeader>Daily Budgeter</PageHeader>

        <DisplayAmounts />

        <AddAmount />

        <SpendFeed />
      </Grid>
    );
  }
}

export default App;
