import { combineReducers } from "redux";
import CartReducer from "./reducers/cart";
import ProductsReducer from "./reducers/products";

export const rootReducer = combineReducers({
    products: ProductsReducer,
    cart: CartReducer
})