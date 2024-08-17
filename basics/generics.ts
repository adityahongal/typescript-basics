// Generics is useful for generating re-usable components

const scores: Array<number> = []
const names: Array<string> = []                      // the number & string defines generic type for that array

function identityOne(val: number|boolean): number | boolean{             // returns number/boolean
    return val
}

function identityTwo(val: any): any {                           // it may return any type either number/boolean/string
    return val
}

// Generics
function identityThree<Type>(val: Type): Type{          // this returns anything which is passed first 
    return val
}

identityThree(33)                                    // this returns number as we first passed the number 33
identityThree("hello")                                  // this returns string as we passed the string "hello"

// Short form
function identityFour<T>(val: T): T {                  // instead of T, we can define our own datatype
    return val
}

interface bottle{
    brand:string,
    price:number
}

identityFour<bottle>({brand: "milton",price: 799})