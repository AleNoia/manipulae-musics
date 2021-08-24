import * as types from '../types';

const initialState = {
  listFavorites: [],
  isLoading: false,
  isSeach: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.FAVORITES_REQUEST: {
      const newState = { ...state };
      newState.listFavorites.push(action.payload);
      return newState;
    }

    default: {
      return state;
    }
  }
}
