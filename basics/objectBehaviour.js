"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "John Doe",
    email: "johndoe@example.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
// createUser()                    // This doesnt work as we need to pass objects in here
createUser({ name: "John Doe", isPaid: false });
// object bad behaviour cz of email object literal
// cz we have strictly mentioned in the above function definition
// createUser({name: "John Doe",isPaid: false,email: "johndoe@example.com"})
// we can pass email as below
// this avoids bad behaviour
var newUser = { name: "John Doe", isPaid: false, email: "johndoe@example.com" };
createUser(newUser);
function createCourse() {
    return { name: "React", price: 199 };
}
