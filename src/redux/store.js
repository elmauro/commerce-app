import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; 
import { composeWithDevTools } from 'redux-devtools-extension';
import productReducer from './reducers/productReducer';
import cartReducer from './reducers/cartReducer';
import orderReducer from './reducers/orderReducer';

// Combine multiple reducers into one root reducer to manage different parts of the state
const reducer = combineReducers({
  productList: productReducer,  // Manages product-related state
  cart: cartReducer,  // Manages cart-related state
  order: orderReducer  // Manages order-related state
});

const initialState = {};  // Initial state for the Redux store

const middleware = [thunk];  // Middleware for handling async actions

// Create the Redux store, applying middleware and enabling Redux DevTools for debugging
const store = createStore(
  reducer,  
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;  // Export the store for use across the app
