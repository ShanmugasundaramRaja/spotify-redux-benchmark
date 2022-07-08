/** @format */

import { ADD_LIKE, REMOVE_LIKE } from "../actions";

const initialState = {
  songs: [],
};

const likesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_LIKE:
      return {
        ...state,
        songs: [...state.songs, payload],
      };

    case REMOVE_LIKE:
      return {
        ...state,
        songs: state.songs.filter((song) => song !== payload),
      };
    default:
      return state;
  }
};

export default likesReducer;