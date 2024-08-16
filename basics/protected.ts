// Just like Private and Public there is another property called Protected
// Also called as access modifiers
// Protected can be accessed in that class
// and can be inherited in other classes as well but not outside the classes

class User1 {
    
    // private _courseCount: 1
    protected _courseCount: number = 1

    private readonly city: string = "Bengaluru"
    constructor(
        public email: string, 
        public name: string,
        private userId: number){
    }

    get getAppleEmail(): string {
        return `apple${this.email}`
    }

    get courseCount(): number{
        return this._courseCount
    }

    set courseCount(courseNum:number){                                 // Setters doesn't have any returntype
        if(courseNum <= 1){
            throw new Error("Course count should be greater than 1")
        }
        this._courseCount = 1
    }
}

// using inheritance we create subuser
// it inherits the parent class user1
// but it cannot acquire the private property such as _courseCount
// using protected we can access it only inside other classes not outside class

class SubUser extends User1 {
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount = 4
    }
}

const jala1 = new User1("jala1@jala1.com","jala",6989)