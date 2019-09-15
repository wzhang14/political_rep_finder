import { SEARCH_REPS, CLEAR_REPS, SET_LOADING } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_REPS:
      return {
        ...state,
        representatives: action.payload,
        loading: false
      };
    case CLEAR_REPS:
      return {
        ...state,
        representatives: [],
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
