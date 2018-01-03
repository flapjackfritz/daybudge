import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dollarsToPennies } from 'helpers/displayNumbers';

const debitAmount = (amountInput) => ({
  type: 'DEBIT_AMOUNT',
  amount: dollarsToPennies(amountInput)
});

const creditAmount = (amountInput) => ({
  type: 'CREDIT_AMOUNT',
  amount: dollarsToPennies(amountInput)
});

class AddAmount extends Component {
  input: HTMLInputElement;
  state = {
    amount: '',
    entryKind: 'debit'
  };

  handleAmountChange = (event) => {
    this.setState({ amount: event.target.value });
  };

  handleEntryKindChange = (event) => {
    this.setState({
      entryKind: event.target.value
    });
  };

  handleSubmit = (event: Event) => {
    event.preventDefault();
    if (!this.state.amount.trim()) {
      return;
    }
    if (this.state.entryKind === 'debit') {
      this.props.dispatch(debitAmount(this.state.amount));
    } else if (this.state.entryKind === 'credit') {
      this.props.dispatch(creditAmount(this.state.amount));
    }
    this.setState({ amount: '' });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="radio" name="contact" value="debit" onChange={this.handleEntryKindChange}  defaultChecked />
            <label>Debit</label>

            <input type="radio" name="contact" value="credit" onChange={this.handleEntryKindChange}  />
            <label>Credit</label>
          </div>
          <input value={this.state.value} onChange={this.handleAmountChange} />
          <button type='submit'>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default connect()(AddAmount);
