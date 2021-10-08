import CartItem from "../../models/cart-item";
import { ADD_TO_CART, DELETE_ITEM } from "../constants/cartConstants";

export const initialState = {
    items: {},
    totalAmount: 0,
};

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const product = action.payload;
            const productTitle = product.title;
            const productPrice = product.price;
            let cartItem;
            const id = product.id;
            if (state.items[product.id]) {
                cartItem = new CartItem(
                    state.items[product.id].quantity + 1,
                    productPrice,
                    productTitle,
                    state.items[product.id].sum + productPrice
                );
            } else {
                cartItem = new CartItem(
                    1,
                    productPrice,
                    productTitle,
                    productPrice
                );
            }

            return {
                ...state,
                items: { ...state.items, [product.id]: cartItem },
                totalAmount: state.totalAmount + productPrice,
            };
        case DELETE_ITEM:
            
            const deletItemKey = action.payload.id;
            const updatedProducts = { ...state.items };
            delete updatedProducts[deletItemKey];
            const amount = action.payload.amount;

            return {
                ...state,
                items: updatedProducts,
                totalAmount: state.totalAmount - amount,
            };
        default:
            return state;
    }
};
export default CartReducer;
