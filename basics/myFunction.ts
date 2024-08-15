function addtwo(num: number){
    return num + 2;
}

addtwo(5)

// addtwo("65")           // not allowed to specify as string

function getUpper(val: string) {
    return val.toUpperCase();
}

getUpper("hello")

function signupUser(name,email, password) {                     // use of "any" not preferred
}

function loginUser(name: string,email: string,isPaid: boolean) {}        // Correct way for typescript

loginUser("admin","1234",true)