abstract class TakePhoto{
    constructor(
        public cameramode: string,
        public filter: string
    ){}
}

// const loremipsum = new TakePhoto("test","test");    //Cannot create an instance of an abstract class

// Abstract classes cannot create their object on their own