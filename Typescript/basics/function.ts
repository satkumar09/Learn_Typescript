//Function:

/*
function addTwo(num){
    num.toUpperCase()
    return num+2
}

addTwo("5")

doesn't shows any error: defeats the purpose of typescript
*/

//good approach
function addTwo(num: number){
    
    return num+2
}
addTwo(5)

function getUpper(val: string){
    return val.toUpperCase()
}

//Passing default value
function signUpUser(name: string, email: string, isPaid: boolean = false){

}

//specifying return type
function addnum (num: number): number{
    return num+2
}
const getHello = (s: string):string => {
    return ""
}

const heros = ["thor", "spiderman", "ironman"]
heros.map((hero): string => {
    return`hero is ${hero}`
})

function consoleError(errmsg: string): void{
    console.log(errmsg);
}
function handleError(errmsg: string): never{
    throw new Error(errmsg)
}
//The never type is used when you are sure that something is never going to occur. 
//Example:
const loop = function ():never {
    while(true) {}
}

type cardNumber = {
    cardnumber: string
}
type cardDate = {
    cardDate: string
}
type cardDetails = cardNumber & cardDate & {
    cvv: number
}

/*equivalent to: 
type cardDetails = {
    cardnumber: string,
    cardDate: string,
    cvv: number,
}
*/

export {}

