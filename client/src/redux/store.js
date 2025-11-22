import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";

import { 
  getProductDetailsReducer, 
  getProductsReducer 
} from "./reducers/productReducer";

import { cartReducer } from "./reducers/cartReducer";

// Combine reducers
const reducer = combineReducers({
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
  cart: cartReducer,
});

// Middleware array
const middleware = [thunk];

// Enable Redux DevTools if available
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create store
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
