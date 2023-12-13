
/**
 * this function calculates total price of a new order
 * 
 * @param {Array} products cartProducts: array of object  
 * @returns {number} total price
 */

export const totalPrice = (products) => {
    let total = 0;
    products.map(pro => total += parseFloat(pro.price));

    return total;

};
