import { writable } from "svelte/store";
import reducer from "./rootReducer";

function redux(init, reducer) {
  const devTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__.connect();

  const { update, subscribe, ...rest } = writable(init);

  function dispatch(action) {
    update(state => {
      devTools && devTools.send(action, state);
      return reducer(state, action);
    });
  }

  return {
    ...rest,
    subscribe,
    dispatch,
  };
}

export default redux({}, reducer);
