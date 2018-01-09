import React from 'react';

import { Grid, PageHeader } from 'react-bootstrap';

import AmountsContainer from 'containers/AmountsContainer';
import AddAmount from 'containers/AddAmount';
import SpendFeedContainer from 'containers/SpendFeedContainer';

class App extends React.Component {

  render() {
    return (
      <Grid>
        <PageHeader>Daily Budgeter</PageHeader>

        <AmountsContainer />

        <AddAmount />

        <SpendFeedContainer />
      </Grid>
    );
  }
}

export default App;
