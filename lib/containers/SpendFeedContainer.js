import { connect } from 'react-redux';
import SpendFeed from '../components/SpendFeed';
import { isSameDay } from 'helpers/dateHelpers';

const visibleSpendingItems = (spendingItems, chosenDate) => {
  return spendingItems.filter(({ datetime }) => isSameDay(new Date(datetime), chosenDate));
};

const mapStateToProps = (state) => {
  return {
    spendingItems: visibleSpendingItems(state.spendingItems, new Date(state.filterDate)),
    filterDate: state.filterDate
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveItemButtonClick: (id) => {
      dispatch({
        type: 'REMOVE_ITEM',
        id
      });
    },
    onForwardDayButtonClick: () => { dispatch({ type: 'FILTER_DAY_FORWARD' }); },
    onBackDayButtonClick: () => { dispatch({ type: 'FILTER_DAY_BACKWARD' }); },
  };
};

const SpendFeedContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SpendFeed);

export default SpendFeedContainer;
