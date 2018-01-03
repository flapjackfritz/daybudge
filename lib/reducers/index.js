import union from 'lodash/union';

const initialState = {
  dailyRemaining: 10000,
  spentToday: 0,
  carryOver: 0,
  todaysFeed: []
};

export default (state = initialState, action) => {
  switch (action.type) {
  case 'CREDIT_AMOUNT':
    return { ...state,
      dailyRemaining: state.dailyRemaining + action.amount,
      spentToday: state.spentToday - action.amount,
      todaysFeed: union(state.todaysFeed, action.amount)
    };
  case 'DEBIT_AMOUNT':
    return { ...state,
      dailyRemaining: state.dailyRemaining - action.amount,
      spentToday: state.spentToday + action.amount,
      todaysFeed: union(state.todaysFeed, action.amount)
    };
  case 'REMOVE_DEBIT':
    return state + 1;
  case 'REMOVE_CREDIT':
    return state + 1;
  default:
    return state;
  }
};
