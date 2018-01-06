import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dollarsToPennies } from 'helpers/displayNumbers';
import { Button, Form, FormGroup, InputGroup, FormControl, Radio } from 'react-bootstrap';

const debitAmount = (amountInput) => ({
  type: 'DEBIT_AMOUNT',
  amount: dollarsToPennies(amountInput)
});

const creditAmount = (amountInput) => ({
  type: 'CREDIT_AMOUNT',
  amount: dollarsToPennies(amountInput)
});

class AddAmount extends Component {

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
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Radio name="radioGroup" value="debit" onChange={this.handleEntryKindChange} inline defaultChecked>
            Debit
          </Radio>
          <Radio name="radioGroup" value="credit" onChange={this.handleEntryKindChange} inline>
            Credit
          </Radio>
        </FormGroup>

        <FormGroup>
          <InputGroup>
            <InputGroup.Addon>$</InputGroup.Addon>
            <FormControl type="number" step="0.01" min="0" value={this.state.amount} onChange={this.handleAmountChange} />
          </InputGroup>
        </FormGroup>

        <Button bsStyle="primary" type="submit">Enter Amount</Button>
      </Form>

    );
  }
}
export default connect()(AddAmount);
