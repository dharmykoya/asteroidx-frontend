import axios from "axios";
import { toast } from "react-toastify";
import {
  FAILED,
  START,
  CREATE_STORE_SUCCESS,
  GET_ALL_STORE_SUCCESS,
  GET_STORE_PRODUCTS_SUCCESS
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

export const fetchStoreDetail = (store, products) => {
  return {
    type: GET_STORE_PRODUCTS_SUCCESS,
    store,
    products
  };
};

export const createStore = (data, history) => {
  return dispatch => {
    dispatch(start());
    return axios
      .post("https://asteroidx-backend.herokuapp.com/stores", data)
      .then(response => {
        const { data } = response.data;
        toast("Store Created", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        });
        history.push("/");
        dispatch(createStoreSuccess(data));
      })
      .catch(error => {
        toast("Error Creating store", {
          position: "top-right",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        });
      });
  };
};

export const getAllStore = () => {
  return dispatch => {
    dispatch(start());
    return axios
      .get("https://asteroidx-backend.herokuapp.com/stores")
      .then(response => {
        const { data } = response.data;
        dispatch(getAllStoreSuccess(data));
      })
      .catch(error => {
        toast("Error getting all stores", {
          position: "top-right",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        });
        dispatch(fail("error"));
      });
  };
};

const getStore = storeId => {
  return axios
    .get(`https://asteroidx-backend.herokuapp.com/stores/${storeId}`)
    .then(response => {
      const { data } = response.data;
      return data;
    })
    .catch(error => {
      toast("Error getting store", {
          position: "top-right",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        progress: undefined,
          
        });
      return error;
    });
};

const averagePrice = products => {
  const variants = products.map(prod => prod.variants);

  const prices = variants.map(variant => {
    return variant.map(v => parseFloat(v.price));
  });
  let mergedPrices = [];
  prices.forEach(price => {
    mergedPrices.push(price[0]);
  });

  return (
    mergedPrices.reduce(
      (accumulator, price, currentIndex) => accumulator + price
    ) / mergedPrices?.length
  );
};

const mergedProducts = grouped => {
  let result = [];
  for (const key in grouped) {
    if (grouped.hasOwnProperty(key)) {
      const element = grouped[key];
      result.push({
        vendor: key,
        productsNumber: element.length,
        averagePrice: averagePrice(element)
      });
    }
  }

  return result;
};

export const getStoreDetails = storeId => {
  return async dispatch => {
    const store = await getStore(storeId);
    dispatch(start());
    return axios
      .get(`${store.url}/products.json?limit=100000000`)
      .then(response => {
        const { products } = response.data;
        const grouped = products.reduce(
          (hash, obj) => ({
            ...hash,
            [obj["vendor"]]: (hash[obj["vendor"]] || []).concat(obj)
          }),
          {}
        );
        const productMerged = mergedProducts(grouped);
        dispatch(fetchStoreDetail(store, productMerged));
      })
      .catch(error => {
        toast("There was an error, please reload the page", {
          position: "top-right",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        });
      });
  };
};
