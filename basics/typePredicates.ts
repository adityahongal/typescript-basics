// Type Predicates

// sometimes you want more direct control over how types change throughout your code.
// To define a user-defined type guard, 
// we simply need to define a function whose return type is a type predicate:

type Fish = {swim: ()=>void}
type Bird = {fly: ()=>void}

function isFishOne(pet: Fish | Bird){
    return (pet as Fish).swim!= undefined
}

function getFood(pet: Fish | Bird){
    if(isFishOne(pet)){
        pet                                       // here typescript is still confused whether it's fish or Bird
        return 'Fish food'
    }
    else{
        pet
        return 'Bird food'
    }
}

// now if we declare pet as a fish it will recognize now

function isFishTwo(pet: Fish | Bird): pet is Fish{
    return (pet as Fish).swim!= undefined
}

function getFoodTwo(pet: Fish | Bird){
    if(isFishTwo(pet)){
        pet                                       // hover on pet 
        return 'Fish food'
    }
    else{
        pet
        return 'Bird food'
    }
}