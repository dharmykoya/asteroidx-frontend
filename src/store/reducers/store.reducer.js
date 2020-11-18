import {
  CREATE_STORE_FAILED,
  CREATE_STORE_START,
  CREATE_STORE_SUCCESS
} from "../actionTypes/index";

const initialState = {
  loading: false,
  store: null,
  error: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_STORE_START:
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

    case CREATE_STORE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    default:
      return state;
  }
};
