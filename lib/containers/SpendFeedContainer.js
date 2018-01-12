import { connect } from 'react-redux';
import SpendFeed from '../components/SpendFeed';

const mapStateToProps = (state) => {
  return {
    spendingItems: state.spendingItems
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onItemButtonClick: (id) => {
      dispatch({
        type: 'REMOVE_ITEM',
        id
      });
    }
  };
};

const SpendFeedContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SpendFeed);

export default SpendFeedContainer;
