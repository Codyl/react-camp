import { PROMOTIONS } from "../shared/promotions";
import { ADD_PROMOTIONS, PROMOTIONS_FAILED, PROMOTIONS_LOADING } from "./ActionTypes";

export const Promotions = (state = {isLoading: true, errMess: null, promotions: []}, action) => {
  switch (action.type) {
    case PROMOTIONS_FAILED:
      return { ...state, errMess: action.payload, isLoading: false };
    case ADD_PROMOTIONS:
      return { ...state, promotions: action.payload, isLoading: false, errMess: null };
    case PROMOTIONS_LOADING:
      return { ...state, isLoading: true, errMess: null };
    default:
      return state;
  }
};
