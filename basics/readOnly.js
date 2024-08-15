// READONLY and optional in typescript
var myUser = {
    _id: "123",
    name: "John Doe",
    email: "johndoe@example.com",
    isActive: true
};
// myUser._id = "456"  // This will throw error as _id is readonly
myUser.email = "joe@example.com"; // can modify this as its not readonly
