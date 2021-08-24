import * as types from '../types';

const initialState = {
  listRequest: [],
  isLoading: false,
  isSeach: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.CHART_TRACKS_REQUEST: {
      const newState = { ...state };

      if (action.payload[1].isFavorite) {
        const listRequestFavorites = action.payload[0].favorites;
        newState.listRequest = listRequestFavorites;

        return newState;
      }

      newState.listRequest = action.payload;
      return newState;
    }

    case types.SEARCH_REQUEST: {
      const newState = { ...state };
      newState.isSeach = true;
      return newState;
    }

    case types.SEARCH_SUCCESS: {
      const newState = { ...state };
      newState.isSeach = false;
      return newState;
    }

    default: {
      return state;
    }
  }
}
