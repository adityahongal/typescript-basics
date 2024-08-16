// Interfaces Vs Types

// A type cannot be changed once it's created
// Using Interface we can add/change

interface user {
    email: string,
    userId: number,
    googleId?: string,
    // startTrail: () => string   
    startTrail(): string,               // can also be written as
    getCoupon(couponName: string): number
}

interface user {                          // called as reopening of interfaces
    githubToken: string
}

// Inheritance can be done in Interface

interface admin extends user {
    role: "admin" | "learner"
}

const john: admin = { role: "admin",
                    email: 'john@gmail.com', userId:9635, 
                    startTrail: () => {return "Trail Started"},
                    getCoupon: (name: "JOHN10") => {return 10},
                    githubToken: "gh_token_123" }