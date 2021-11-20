//Remember, the store just holds all the reducers togather via the combine reducers.
//Its the index js file in the reducers folder which actually combines them so we could selectively use the values in the store

// import { createStore, applyMiddleware } from "redux";
// import reducers from "./reducers";
// import thunk from "redux-thunk";

// export const store = createStore(reducers, {}, applyMiddleware(thunk));

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

export const store = createStore(reducers, {}, applyMiddleware(thunk));
