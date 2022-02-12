import { type } from "../types/types";

const initial = {
  isLoading: false,
  
};

const loadingReducer = (state = initial, action) => {
  switch (action.type) {
    case type.START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case type.STOP_LOADING:
      return {
        ...state,
        isLoading: false,
      };
   
    default:
      return state;
  }
};

export default loadingReducer;

      //   dispatch({ type: type.START_LOADING });
      //   dispatch({ type: type.STOP_LOADING });
