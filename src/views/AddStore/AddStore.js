import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {createStore} from "../../store/actions/store.action"

const AddStore = props => {
  const [storeName, setStoreName] = useState("");
    const [storeUrl, setStoreUrl] = useState("");
    
      const dispatch = useDispatch();

  const inputChangeHandler = event => {
    const value = event.target.value;
    const name = event.target.name;
      
    if (name === "name") {
      setStoreName(value);
    } else {
      setStoreUrl(value);
    }
  };

  const handleLogin = async e => {
    e.preventDefault();

    const newStore = {
      name: storeName,
      url: storeUrl
    };
      

    await dispatch(createStore(newStore));
  };
  return (
    <section className="">
      <div className="form-container">
        <form id="signup" method="post" action="/signup">
          <h3 className="text-center">Save Store</h3>
          <input
            name="name"
            type="text"
            placeholder="enter store name"
            required="required"
            className="input pass"
            onChange={inputChangeHandler}
          />
          <input
            name="url"
            type="text"
            placeholder="enter store url"
            required="required"
                      className="input pass"
                      onChange={inputChangeHandler}
          />
          <button className="inputButton" onClick={handleLogin}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddStore;
