// we can declare a type parameter that is constrained by another type parameter
// we'd like to ensure that we're not accidentally
// grabbing a property that doesn't exist on the object
function exampleFunctionOne(valOne, valTwo) {
    return {
        valOne: valOne,
        valTwo: valTwo
    };
}
exampleFunctionOne(3, "4");
function exampleFunctionTwo(valOne, valTwo) {
    return {
        valOne: valOne,
        valTwo: valTwo
    };
}
exampleFunctionTwo(3, { username: "john", password: "123" });
var Sellable = /** @class */ (function () {
    function Sellable() {
        this.cart = [];
    }
    Sellable.prototype.addToCart = function (products) {
        this.cart.push(products);
    };
    return Sellable;
}());
