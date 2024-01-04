
//Object: Collection of named values

const User = {
    name: "satya",
    email: "satya@mai.com",
    isActive: true,
}

//function taking object as parameters
function createUser({name: string, isPaid: boolean}){

}
createUser({name: "hitesh", isPaid: false})

//createUser({name: "hitesh", isPaid: false, email: "s@s.com"})    ->   gives error
let newUser = {name: "hitesh", isPaid: false, email: "s@s.com"}
createUser(newUser)    // doesn't gives error even when email is passed as argument


//function with return type object
function createCourse(): {name: string, price: number} {
    return {name: "", price: 0}
}



//Type Aliases
//better approach to create object

type User_t = {
    readonly _id: string,    //readonly property (pure functional feature of typescript)
    name: string,
    email: string,
    isActive: boolean,
    creadcardDetails?: number,    //optional property -> not required to be passed as argument in any function 
}

//we can also do 
type bul = boolean    //we can now use bul instead of boolean

//we can simply pass the object as parameter
function createUser_t(user: User_t){

}

createUser_t({_id: "", name: "", email: "", isActive: true})


export {}
