// Union types are used to avoid use of "any" and to add much more stability to the code
var score = 44;
score = 0;
score = "99";
var johndoe = { name: "johndoe", id: 969 };
johndoe = { username: "johndoeAsAdmin", id: 88546 };
// Union types with functions
function getDatabase(id) {
    // eg. making api calls
    console.log(id);
}
getDatabase(9695);
getDatabase("9695");
// function getDatabase2(id: number | string){
//     id.toLowerCase()              // this is not possible cz it treats it as new datatype even though we have string declared
// }
// it can be done as below by Union Narrowing
function getDatabase3(id) {
    if (id === "string") {
        id.toLowerCase();
    }
}
// Union types with Arrays
var data1 = [1, 2, 3];
var data2 = ["a", "b", "c"];
var mixedData = ["1", "2", 3, true]; // this helps in making data more strict
var pi = 3.14; // More strict data assigning
// pi = 8.74              // Not allowed
var seatAllotment;
seatAllotment = "window"; // this is allowed
// seatAllotment = "Pilot Seat"       // this is not allowed
