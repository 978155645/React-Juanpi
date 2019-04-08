var initialState = {
  counter: 0,
  counter1: 0,
  lists: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREASE':
      // return { counter: state.counter + 1 };
      // return Object.assign({}, state, { counter: state.counter + 1 });
      return { ...state, counter: state.counter + 1 };
    case 'DECREASE':
      // return { counter1: state.counter1 - 1 };
      // return Object.assign({}, state, { counter1: state.counter1 - 1 });
      return { ...state, counter1: state.counter1 - 1 };
    case 'GETLISTS':
      // return Object.assign({}, state, { lists: action.payload });
      return { ...state, lists: action.payload.lists, total: action.payload.total };
    default:
      return state;
  }
};

export default reducer;
