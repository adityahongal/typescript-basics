class User {
    
    private _courseCount: 1

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

const jala = new User("jala@jala.com","jala",9343)