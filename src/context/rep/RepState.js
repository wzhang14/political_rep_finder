import React, { useReducer } from "react";
import axios from "axios";
import RepContext from "./repContext";
import RepReducer from "./repReducer";
import { SEARCH_REPS, CLEAR_REPS, SET_LOADING } from "../types";

const RepState = props => {
  const initialState = {
    representatives: [],
    rep: {},
    loading: false
  };

  const [state, dispatch] = useReducer(RepReducer, initialState);

  // Search Representatives
  const searchReps = async text => {
    setLoading();
    const res = await axios.get(
      `https://represent.opennorth.ca/postcodes/${text}/`
    );

    dispatch({ type: SEARCH_REPS, payload: res.data.representatives_centroid });
  };

  // Clear Representatives
  const clearReps = () => {
    dispatch({ type: CLEAR_REPS });
  };

  // Set Loading
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  return (
    <RepContext.Provider
      value={{
        representatives: state.representatives,
        rep: state.rep,
        loading: state.loading,
        searchReps,
        clearReps
      }}
    >
      {props.children}
    </RepContext.Provider>
  );
};

export default RepState;
