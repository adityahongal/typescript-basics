// Narrowwing the typeof datatype used

function detectType(val: number | string){
    if (typeof val === "string"){
        return val.toUpperCase()
    }
    return val + 2
}

function provideId(id: string | null){
    if(!id){
        console.warn("Please provide valid ID")
        return
    }
    // some database operations
    id.toLowerCase()
}

// array is considered as object
// if the string value is totally empty we should handle it

function printAll(strs: string | string[] | null) {
    if (strs) {                                              //null is handled here
      if (typeof strs === "object") {                        // if it's a array(object)
        for (const s of strs) {
          console.log(s);
        }
      } else if (typeof strs === "string") {                 // else it's a string
        console.log(strs);
      }
    }
  }