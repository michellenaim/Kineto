import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
// import selectMoviesByGenre from "./reducers/selector"

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let preloadedState = undefined;
  if (window.currentUser) {
    preloadedState = {
      session: {
        currentUser: window.currentUser,
      },
    };
  }
  // const store = createStore(preloadedState);
  const store = configureStore(preloadedState);
  ReactDOM.render(<Root store={store} />, root);
  // window.store = store;
  // window.selectMoviesByGenre = selectMoviesByGenre
});
