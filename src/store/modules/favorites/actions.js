import * as types from '../types';

export function favoritesRequest(payload) {
  return {
    type: types.FAVORITES_REQUEST,
    payload,
  };
}

export function favoritesSuccess() {
  return {
    type: types.FAVORITES_SUCCESS,
  };
}
