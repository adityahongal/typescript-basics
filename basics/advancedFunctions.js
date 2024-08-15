// function getValue(myVal: number): boolean {               
//     if (myVal > 5){
//         return true;
//     }
//     return "200 OK";
// }
var getHello = function (s) {
    return "";
};
var heros = ["thor", "ironman", "Deadpool"];
// const heros = [1,2,3]
// heros.map(hero =>{          
//     return 'hero is ${hero}'            // Typescript automatically detects if hero is string or number
// })
heros.map(function (hero) {
    return 'hero is ${hero}';
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(msg) {
    throw new Error(msg); // used for handling error/forceful termination                  
}
