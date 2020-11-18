import axios from 'axios';
import { toast } from "react-toastify";
import {
FAILED,
  START,
  CREATE_STORE_SUCCESS,
  GET_ALL_STORE_SUCCESS
} from "../actionTypes/index";

export const start = () => {
  return {
    type: START
  };
};

export const createStoreSuccess = store => {
  return {
    type: CREATE_STORE_SUCCESS,
    store
  };
};

export const fail = error => {
  return {
    type: FAILED,
    error
  };
};


export const getAllStoreSuccess = stores => {
  return {
    type: GET_ALL_STORE_SUCCESS,
    stores
  };
};

export const createStore = (data, history) => {
  return dispatch => {
    dispatch(start());
    return axios.post('http://localhost:8080/stores', data)
        .then(response => {
          const { data } = response.data;
          toast('Store Created', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
          history.push("/");
        dispatch(createStoreSuccess(data));
      })
      .catch(error => {
        dispatch(fail("error"));
      });
  };
};

export const getAllStore = () => {
  return dispatch => {
    dispatch(start());
    return axios.get('http://localhost:8080/stores')
      .then(response => {
          console.log(89, response.data.data);
          const { data } = response.data;
        dispatch(getAllStoreSuccess(data));
      })
      .catch(error => {
        dispatch(fail("error"));
      });
  };
};

