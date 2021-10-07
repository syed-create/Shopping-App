import { createSelector } from "reselect";
import { initialState } from "../reducers/products";

const selectProduct = state => state.products || initialState;

export const makeSelectProductsData = () =>
    createSelector(selectProduct, substate => substate.availableProducts);

export const makeSelectUserProductsData = () =>
    createSelector(selectProduct, substate => substate.userProducts);
