import { FETCH_USERS } from '../actions/types';

const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_USERS:
      return [ ...state, ...action.payload ];
  }
  return state;
};

export default reducer;
