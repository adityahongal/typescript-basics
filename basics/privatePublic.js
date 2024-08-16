// Using readonly we cannot modify but can access
// Using private we cannot modify and access too
// All the words which are not marked as private are public automatically
// private can be written as "#" in javascript
// class User {
//     public email: string
//     private name: string
//     private readonly city: string = "Bengaluru"
//     constructor(email: string, name: string){
//         this.email = email
//         this.name = name
//     }
// }
// above same can be written in production level code as
var User = /** @class */ (function () {
    function User(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this.city = "Bengaluru";
    }
    return User;
}());
var jala = new User("jala@jala.com", "jala", 9343);
// jala.city = "Mumbai"         // not accessible
