import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { createStore } from "../../store/actions/store.action";

const AddStore = props => {
  const [storeName, setStoreName] = useState("");
  const [storeUrl, setStoreUrl] = useState("");
  const [urlError, setUrlError] = useState("");

  const { error } = useSelector(state => state.store);
  const dispatch = useDispatch();
  const history = useHistory();

  const inputChangeHandler = event => {
    const value = event.target.value;
    const name = event.target.name;

    if (name === "name") {
      setStoreName(value);
    } else if (name === "url") {
      setUrlError("");
      setStoreUrl(value);
    }
  };

  const handleLogin = async e => {
    e.preventDefault();

    if (!storeUrl.match(/^https:\/\//)) {
      setUrlError("Url should be https://example.com");
      return false;
    }

    const newStore = {
      name: storeName,
      url: storeUrl
    };

    await dispatch(createStore(newStore, history));
  };
  return (
    <section className="">
      <div className="form-container">
        <form id="signup" method="post" action="/signup">
          <h3 className="text-center">Save Store</h3>
          {error ? (
            <Alert variant="danger" className="alert-error">
              {error}
            </Alert>
          ) : (
            ""
          )}
          <input
            name="name"
            type="text"
            placeholder="enter store name"
            required="required"
            className="input pass"
            onChange={inputChangeHandler}
          />

          <input
            type="url"
            name="url"
            id="url"
            placeholder="https://example.com"
            pattern="https://.*"
            size="30"
            className="input pass"
            onChange={inputChangeHandler}
            required
          />
          <div className="text-danger url-error">{urlError}</div>
          <button
            className="inputButton"
            onClick={handleLogin}
            disabled={urlError ? true : false}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddStore;
