// Use case of how type can be used

type User = {
    name: string,
    email: string,
    isActive: boolean
}

function createUser(user: User): User {
    return {name: "", email: "", isActive:true}
}

createUser({name: "", email: "", isActive:true})