// Type Predicates
function isFishOne(pet) {
    return pet.swim != undefined;
}
function getFood(pet) {
    if (isFishOne(pet)) {
        pet; // here typescript is still confused whether it's fish or Bird
        return 'Fish food';
    }
    else {
        pet;
        return 'Bird food';
    }
}
// now if we declare pet as a fish it will recognize now
function isFishTwo(pet) {
    return pet.swim != undefined;
}
function getFoodTwo(pet) {
    if (isFishTwo(pet)) {
        pet; // hover on pet 
        return 'Fish food';
    }
    else {
        pet;
        return 'Bird food';
    }
}
