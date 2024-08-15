// function getValue(myVal: number): boolean {               
//     if (myVal > 5){
//         return true;
//     }
//     return "200 OK";
// }

const getHello = (s:string):string => {
    return ""
}

const heros = ["thor","ironman","Deadpool"]             
// const heros = [1,2,3]

// heros.map(hero =>{          
//     return 'hero is ${hero}'            // Typescript automatically detects if hero is string or number
// })

heros.map((hero):string =>{                        // Explicitly mentioned as string to avoid return type number
    return 'hero is ${hero}'            
})

function consoleError(errmsg: string):void {                    // returns void means returns nothing only error msg is returned
    console.log(errmsg);
}

function handleError(msg: string):never {                    // doesn't return a value used for intentionally crashing with error
    throw new Error(msg);                                   // used for handling error/forceful termination                  
}