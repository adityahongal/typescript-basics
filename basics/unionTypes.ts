// Union types are used to avoid use of "any" and to add much more stability to the code

let score : number | string = 44;

score = 0
score = "99"

//Another Example
type User = {
    id: number,
    name: string
}

type Admin = {
    id: number,
    username: string
}

let johndoe: User | Admin = { name: "johndoe", id:969 }

johndoe = {username: "johndoeAsAdmin", id:88546}

// Union types with functions

function getDatabase(id: number | string){
    // eg. making api calls
    console.log(id)
}

getDatabase(9695)
getDatabase("9695")


// function getDatabase2(id: number | string){
    
//     id.toLowerCase()              // this is not possible cz it treats it as new datatype even though we have string declared
// }

// it can be done as below by Union Narrowing

function getDatabase3(id: number | string){
    if(id === "string"){
        id.toLowerCase()
    }
}

// Union types with Arrays

const data1: number[] = [1,2,3]
const data2: string[] = ["a","b","c"]

const mixedData: (number | string | boolean)[] = ["1","2",3,true]              // this helps in making data more strict

let pi:3.14 = 3.14     // More strict data assigning
// pi = 8.74              // Not allowed

let seatAllotment : "aisle" | "middle" | "window"

seatAllotment = "window"        // this is allowed
// seatAllotment = "Pilot Seat"       // this is not allowed