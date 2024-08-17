// Generics is useful for generating re-usable components
var scores = [];
var names = []; // the number & string defines generic type for that array
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
// Generics
function identityThree(val) {
    return val;
}
identityThree(33); // this returns number as we first passed the number 33
identityThree("hello"); // this returns string as we passed the string "hello"
// Short form
function identityFour(val) {
    return val;
}
identityFour({ brand: "milton", price: 799 });
