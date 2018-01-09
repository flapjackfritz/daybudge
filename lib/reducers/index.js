
const initialState = {
  dailyRemaining: 10000,
  spentToday: 0,
  carryOver: 0,
  lastItemId: 0,
  spendingItems: []
};

export default (state = initialState, action) => {
  switch (action.type) {
  case 'CREDIT_AMOUNT':
    return { ...state,
      dailyRemaining: state.dailyRemaining + action.amount,
      spentToday: state.spentToday - action.amount,
      lastItemId: state.lastItemId + 1,
      spendingItems: [...state.spendingItems,
        {
          id: state.lastItemId + 1,
          kind: 'Credit',
          amount: action.amount,
          location: 'Dominos',
          datetime: Date.now()
        }
      ]
    };
  case 'DEBIT_AMOUNT':
    return { ...state,
      dailyRemaining: state.dailyRemaining - action.amount,
      spentToday: state.spentToday + action.amount,
      lastItemId: state.lastItemId + 1,
      spendingItems: [...state.spendingItems,
        {
          id: state.lastItemId + 1,
          kind: 'Debit',
          amount: action.amount,
          location: 'Dominos',
          datetime: Date.now()
        }
      ]
    };
  case 'REMOVE_DEBIT':
    return state + 1;
  case 'REMOVE_CREDIT':
    return state + 1;
  default:
    return state;
  }
};
