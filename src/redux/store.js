import { createStore } from "redux";
import Reducer from "./reducer/reducer";

const store = createStore(
    Reducer, /* preloadedState, */
  );
  export default store