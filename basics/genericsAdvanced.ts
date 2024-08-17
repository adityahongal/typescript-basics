// Generics in array and arrow functions in TypeScript

// taking input as arrays

function getSearchProducts<T>(products: T[]): T {
    
    // do some database operations
    const myIndex = 3
    return products[myIndex]
}

// the above same using arrow function
// to get single element from array ->
const getMoreProducts = <T>(products: T[]): T => {                      // "T => {}"

    // do some database operations
    const myIndex = 4
    return products[myIndex];
}

// to get whole array
const getAllProducts = <T>(products: T[]): T[] => {                     // "T[] => {}"

    // do some database operations
    return products;
}