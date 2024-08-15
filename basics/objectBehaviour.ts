const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    isActive: true
}

function createUser({name: string, isPaid: boolean}){                       // Passing object name and isPaid to function

}


// createUser()                    // This doesnt work as we need to pass objects in here

createUser({name: "John Doe",isPaid: false})

// object bad behaviour cz of email object literal
// cz we have strictly mentioned in the above function definition
// createUser({name: "John Doe",isPaid: false,email: "johndoe@example.com"})

// we can pass email as below
// this avoids bad behaviour
let newUser = {name: "John Doe",isPaid: false,email: "johndoe@example.com"}
createUser(newUser)

function createCourse():{name: string,price: number}{           // Object returning a n object with type specified
    return {name: "React", price: 199} 
}




export {}