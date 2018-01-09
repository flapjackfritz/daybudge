import { connect } from 'react-redux';
import SpendFeed from '../components/SpendFeed';

const mapStateToProps = (state) => ({
  spendingItems: state.spendingItems
});

const SpendFeedContainer = connect(
  mapStateToProps,
  {}
)(SpendFeed);

export default SpendFeedContainer;
