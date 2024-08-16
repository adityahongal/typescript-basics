// Tuples are specialised arrays with some restrictions
// Order of arrays is important

// const user4 : (string|number)[] = [1, "hello"]                // regular array

const tuUser : [string,number,boolean] = ["hello",1,false]       // Tuple // cannot reverse the order

let rgb: [number,number,number]
rgb = [255,0,0]                     // there cannot be a 4th number in the array

type user5 = [number,string]
const newUser5 : user5 = [1, "john@example.com"]

// newUser5.push(true)      //array operations not possible on tuples in latest versions