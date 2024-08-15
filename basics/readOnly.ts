// READONLY and optional in typescript

//readonly doesn't allow to change the type

type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    creditCardDetails?: number                     // "?" means optional i.e. credit card details may or may not be required
}

let myUser: User = {
    _id: "123",
    name: "John Doe",
    email: "johndoe@example.com",
    isActive: true
}

// myUser._id = "456"  // This will throw error as _id is readonly
myUser.email = "joe@example.com"      // can modify this as its not readonly


// mix and match of types
type cardNumber = {
    cardNumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate              