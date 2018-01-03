import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dollarsToPennies } from 'helpers/displayNumbers';

const debitAmount = (amountInput) => ({
  type: 'DEBIT_AMOUNT',
  amount: dollarsToPennies(amountInput)
});

class AddAmount extends Component {
  input: HTMLInputElement;
  state = {
    value: ''
  };
  handleChange = (event: SyntheticKeyboardEvent<HTMLInputElement>) => {
    this.setState({ value: event.currentTarget.value });
  };
  handleSubmit = (event: Event) => {
    event.preventDefault();
    if (!this.state.value.trim()) {
      return;
    }
    this.props.dispatch(debitAmount(this.state.value));
    this.setState({ value: '' });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.value} onChange={this.handleChange} />
          <button type="submit">
            Add Todo
          </button>
        </form>
      </div>
    );
  }
}
export default connect()(AddAmount);
