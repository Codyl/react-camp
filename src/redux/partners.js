import * as actionTypes from "./ActionTypes";
import { PARTNERS } from "../shared/partners";

export const Partners = (state = { partners: [], errMess: null, isLoading: true}, action) => {
  switch (action.type) {
    case actionTypes.PARTNERS_LOADING:
      return { ...state, isLoading: true, errMess: null };
    case actionTypes.PARTNERS_FAILED:
      return {...state, isLoading: false, errMess: action.payload}
    case actionTypes.ADD_PARTNERS:
      return { ...state, partners: action.payload, isLoading: false, errMess: null }
    default:
      return state;
  }
};
