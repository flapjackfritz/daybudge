import React from 'react';

import { Grid } from 'react-bootstrap';

import DailyAmounts from './DailyAmounts';
import InputSpend from './InputSpend';
import SpendFeed from './SpendFeed';

class App extends React.Component {
  render() {
    return (
      <Grid>
        <DailyAmounts />

        <InputSpend />

        <div>
          Spending Feed
          <div>13 December 2017</div>
        </div>

        <SpendFeed />

      </Grid>
    );
  }
}

export default App;
