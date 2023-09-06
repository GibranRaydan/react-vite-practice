/**
 * @param {Array} productsInCart Array of objects
 * @returns {number} Total price
 */
const totalPrice = (productsInCart) => {
    let sum = 0
    productsInCart.forEach(product => sum += product.price);
    return sum
}

export {totalPrice}