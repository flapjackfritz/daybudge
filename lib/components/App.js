import React from 'react';

import { Grid, PageHeader } from 'react-bootstrap';

import AmountsContainer from 'containers/AmountsContainer';
import AddAmount from 'containers/AddAmount';
import SpendFeedContainer from 'containers/SpendFeedContainer';
import ButtonContainer from 'containers/ButtonContainer';

class App extends React.Component {

  render() {
    return (
      <Grid>
        <PageHeader>Daily Budgeter</PageHeader>

        <AmountsContainer />

        <AddAmount />

        <SpendFeedContainer />

        <ButtonContainer bsStyle="danger">
          Clear Storage
        </ButtonContainer>


      </Grid>
    );
  }
}

export default App;
