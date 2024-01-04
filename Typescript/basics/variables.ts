//Variables:


//string
let greetings: string = "Hello"

//greetings = 6 (will show error)

console.log(greetings);

//number 
let userId: number = 334455.3

userId.toFixed()
//boolean
let isLoggedIn: boolean = false

//for the above cases we donot need to declare the variable in this manner
//let number = 334455.3 or let greetings = "hello" will work fine but there are situation where this is important


//any
//let hero is cosidered as let hero:any -> (not recommended) ts will automatically put the type of this variable as 'any'

//no implicit any declaration is recommended

let hero: string

function getHero(){
    return "thor"
}

hero = getHero()

export {}