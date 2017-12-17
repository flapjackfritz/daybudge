import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class DailyAmounts extends Component {

  render() {
    return (
      <Table responsive>
        <tr>
          <td>$31.26</td>
          <td>Remaining (daily)</td>
        </tr>
        <tr>
          <td>$22.02</td>
          <td>Spent Today</td>
        </tr>
        <tr>
          <td>$22.01</td>
          <td>Carry-Over</td>
        </tr>
      </Table>
    );
  }

}

export default DailyAmounts;
