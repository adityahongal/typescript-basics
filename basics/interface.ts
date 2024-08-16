interface user {
    email: string,
    userId: number,
    googleId?: string,
    // startTrail: () => string   
    startTrail(): string,               // can also be written as
    getCoupon(couponName: string): number
}

const john: user = {email: 'john@gmail.com', userId:9635, 
                    startTrail: () => {return "Trail Started"},
                   getCoupon: (name: "JOHN10") => {return 10} }