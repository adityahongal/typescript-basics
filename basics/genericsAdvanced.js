// Generics in array and arrow functions in TypeScript
// taking input as arrays
function getSearchProducts(products) {
    // do some database operations
    var myIndex = 3;
    return products[myIndex];
}
// the above same using arrow function
// to get single element from array ->
var getMoreProducts = function (products) {
    // do some database operations
    var myIndex = 4;
    return products[myIndex];
};
// to get whole array
var getAllProducts = function (products) {
    // do some database operations
    return products;
};
