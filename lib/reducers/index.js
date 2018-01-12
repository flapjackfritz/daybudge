import { v4 } from 'node-uuid';
import { deleteState } from 'localStorage';

const initialState = {
  dailyRemaining: 10000,
  spentToday: 0,
  carryOver: 0,
  filterDate: Date.now(),
  spendingItems: []
};

export default (state = initialState, action) => {
  switch (action.type) {
  case 'CREDIT_AMOUNT':
    return { ...state,
      dailyRemaining: state.dailyRemaining + action.amount,
      spentToday: state.spentToday - action.amount,
      spendingItems: [...state.spendingItems,
        {
          id: v4(),
          kind: 'Credit',
          amount: action.amount,
          location: action.location,
          datetime: Date.now()
        }
      ]
    };
  case 'DEBIT_AMOUNT':
    return { ...state,
      dailyRemaining: state.dailyRemaining - action.amount,
      spentToday: state.spentToday + action.amount,
      spendingItems: [...state.spendingItems,
        {
          id: v4(),
          kind: 'Debit',
          amount: action.amount,
          location: action.location,
          datetime: Date.now()
        }
      ]
    };
  case 'REMOVE_ITEM': {
    const spendingItem = state.spendingItems.filter(({ id }) => id === action.id)[0];
    let amount = spendingItem['amount'];

    if (spendingItem['kind'] == 'Credit') {
      amount = amount * -1;
    }

    return { ...state,
      dailyRemaining: state.dailyRemaining + amount,
      spentToday: state.spentToday - amount,
      spendingItems: state.spendingItems.filter(({ id }) => id !== action.id)
    };
  }
  case 'CLEAR_STORAGE':
    deleteState();
    return initialState;
  case 'FILTER_DAY_FORWARD':
    return { ...state,
      filterDate: (new Date(state.filterDate + 86400000)).valueOf()
    };
  case 'FILTER_DAY_BACKWARD':
    return { ...state,
      filterDate: (new Date(state.filterDate - 86400000)).valueOf()
    };
  default:
    return state;
  }
};
