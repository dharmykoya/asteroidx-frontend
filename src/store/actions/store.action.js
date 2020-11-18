import axios from 'axios';
import {
CREATE_STORE_FAILED,
  CREATE_STORE_START,
  CREATE_STORE_SUCCESS
} from "../actionTypes/index";

export const createStoreStart = () => {
  return {
    type: CREATE_STORE_START
  };
};

export const createStoreSuccess = store => {
  return {
    type: CREATE_STORE_SUCCESS,
    store
  };
};

export const createStoreFail = error => {
  return {
    type: CREATE_STORE_FAILED,
    error
  };
};

export const createStore = data => {

  return dispatch => {
    dispatch(createStoreStart());
    return axios.post('http://localhost:8080/stores', data)
        .then(response => {
          console.log(45, response.data);
        const { data } = response.data;
        dispatch(createStoreSuccess(data));
      })
      .catch(error => {
        dispatch(createStoreFail("error"));
      });
  };
};

