import PRODUCTS from "../../data/dummy-data";

export const initialState = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(product => product.ownerId === "u1"),
};

const ProductsReducer = (state = initialState, action) => {
    return state;
};

export default ProductsReducer;
