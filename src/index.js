import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers/index";
import { Provider } from "react-redux";

// creating local store 
const store = configureStore({
  reducer:rootReducer,
})

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={store} >
      <BrowserRouter>
        <App />
        <Toaster/>
      </BrowserRouter>
    </Provider>
  </>
);
