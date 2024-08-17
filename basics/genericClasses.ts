// we can declare a type parameter that is constrained by another type parameter
// we'd like to ensure that we're not accidentally
// grabbing a property that doesn't exist on the object

function exampleFunctionOne<T, U>( valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}

exampleFunctionOne(3,"4")

// example for generic inputs

interface Database {
    username : string,
    password : string
}

function exampleFunctionTwo<T, U extends Database>( valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}

exampleFunctionTwo(3,{username:"john",password:"123"})

// class types in generics
// Generic class can handle the common use cases between the two interfaces/classes

interface Quiz {
    name: string
    type: string
}

interface Course {
    name: string
    author: string
    subject: string
}

class Sellable<T>{
    public cart: T[] = []

    addToCart(products: T){
        this.cart.push(products)
    }
}