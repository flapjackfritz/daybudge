import { connect } from 'react-redux';
import Amounts from '../components/Amounts';

const mapStateToProps = (state) => ({
  dailyRemaining: state.dailyRemaining,
  spentToday: state.spentToday,
  carryOver: state.carryOver
});

const DisplayAmounts = connect(
  mapStateToProps,
  {}
)(Amounts);

export default DisplayAmounts;
