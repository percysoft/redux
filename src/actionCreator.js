const addToCart = product => {
    return {
        type:"ADD_TO_CART",
        product
    }
};

const removeFromCart = product => {
    return {
        type:"REMOVE_TO_CART",
        product
    }
};

export { addToCart, removeFromCart };