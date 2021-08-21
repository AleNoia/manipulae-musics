import * as types from '../types';

export function chartTracksRequest(payload) {
  return {
    type: types.CHART_TRACKS_REQUEST,
    payload,
  };
}

export function chartTracksSuccess() {
  return {
    type: types.CHART_TRACKS_SUCCESS,
  };
}

export function searchRequest() {
  return {
    type: types.SEARCH_REQUEST,
  };
}

export function searchSuccess() {
  return {
    type: types.SEARCH_SUCCESS,
  };
}
