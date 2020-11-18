import {
  FAILED,
  START,
  CREATE_STORE_SUCCESS,
  GET_ALL_STORE_SUCCESS
} from "../actionTypes/index";

const initialState = {
  loading: false,
  store: null,
  error: "",
  stores: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case START:
      return {
        ...state,
        loading: true
      };

    case CREATE_STORE_SUCCESS:
      return {
        ...state,
        loading: false,
        store: action.store,
        error: ""
      };

    case FAILED:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    
    case GET_ALL_STORE_SUCCESS:
      return {
        ...state,
        loading: false,
        stores: action.stores
      };

    default:
      return state;
  }
};
