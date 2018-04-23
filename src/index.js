import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
//import rootReducer from "./reducers";
import { Provider } from "react-redux";
//import App from './components/App'

//const store = createStore(rootReducer);
//const styles = {
//  fontFamily: "sans-serif",
//  textAlign: "center"
//};

render(
  <div>Het</div>,
  //<Provider store={store}>
  // <App />
  //</Provider>,
  document.getElementById("root")
);
