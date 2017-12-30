import React from 'react';

import { Grid, PageHeader } from 'react-bootstrap';

import Amounts from './Amounts';
import InputAmount from './InputAmount';
import SpendFeed from './SpendFeed';

class App extends React.Component {
  render() {
    return (
      <Grid>
        <PageHeader>Daily Budgeter</PageHeader>

        <Amounts />

        <InputAmount />

        <SpendFeed />
      </Grid>
    );
  }
}

export default App;
