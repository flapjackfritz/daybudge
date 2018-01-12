import { connect } from 'react-redux';
import SpendFeed from '../components/SpendFeed';

const sameDay = (date1, date2) => {
  return date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate();
};

const visibleSpendingItems = (spendingItems, chosenDate) => {
  return spendingItems.filter(({ datetime }) => sameDay(new Date(datetime), chosenDate));
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
