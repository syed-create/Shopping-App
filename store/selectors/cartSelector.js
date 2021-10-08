import { createSelector } from "reselect";
import { initialState } from "../reducers/cart";

const selectCart = state => state.cart || initialState;

export const makeSelectCartData = () =>
    createSelector(selectCart, substate => substate.items);

export const makeSelectCartTotalAmount = () =>
    createSelector(selectCart, substate=> substate.totalAmount);
