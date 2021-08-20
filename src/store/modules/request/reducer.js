import * as types from '../types';

const initialState = {
  listChartTracks: [],
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.CHART_TRACKS_REQUEST: {
      const newState = { ...state };
      newState.listChartTracks = action.payload;
      // newState.isLoading = true;
      return newState;
    }

    case types.CHART_TRACKS_SUCCESS: {
      const newState = { ...state };
      // newState.isLoading = false;
      return newState;
    }

    default: {
      return state;
    }
  }
}
