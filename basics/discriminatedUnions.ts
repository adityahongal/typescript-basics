// Discriminated Unions and Exhaustiveness Checking with never

interface circle{
    kind: "circle",
    radius: number
}

interface square{
    kind: "square",
    sideLength: number
}

type Shape = circle | square;

function getShape(shape: Shape){
    if(shape.kind === "circle"){
        return Math.PI * shape.radius ** 2;
    }
    else if(shape.kind === "square"){
        return shape.sideLength ** 2;
    }
}

// exhaustiveness checking with never
 
function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}