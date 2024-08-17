// more on Narrowing the typeof data
// JavaScript has an operator for checking whether or not a value is an “instance” of another value
// instanceof is also a type guard, and TypeScript narrows in branches guarded by instanceof
// typeof checks default data types
// instanceof checks the instance of classes,datatypes,etc
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
