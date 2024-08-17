// Narrowwing the typeof datatype used
function detectType(val) {
    if (typeof val === "string") {
        return val.toUpperCase();
    }
    return val + 2;
}
function provideId(id) {
    if (!id) {
        console.warn("Please provide valid ID");
        return;
    }
    // some database operations
    id.toLowerCase();
}
// array is considered as object
// if the string value is totally empty we should handle it
function printAll(strs) {
    if (strs) { //null is handled here
        if (typeof strs === "object") { // if it's a array(object)
            for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
                var s = strs_1[_i];
                console.log(s);
            }
        }
        else if (typeof strs === "string") { // else it's a string
            console.log(strs);
        }
    }
}
