import * as types from '../types';

const initialState = {
  listChartTracks: [],
  isLoading: false,
  isSeach: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.CHART_TRACKS_REQUEST: {
      const newState = { ...state };
      newState.listChartTracks = action.payload;
      // newState.isLoading = true;
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
