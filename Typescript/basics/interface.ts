//interface

interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    startTrail(): string,
    // or startTrail: () => string,
    getCoupon(couponname: string): number

}

const hitesh: User = {dbId: 22, email: "h@h.com", userId: 2211, 
startTrail: () => {
    return "trail started"
},
getCoupon: (name: "sat") => {
    return 10
}
}

//difference between type and interface:

//reopening of interface is possible
// interface User {
//     gitubToken: string,
// }
//this will add githubToken property in already created User object


//interface allows inheritance
interface Admin extends User {
    role: "admin" | "ta" | "learner"
}
