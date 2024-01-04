//Syntax1:

const arr1: string[] = []
arr1.push("str input")

type User = {
    name: string,
    isActive: boolean,
}
const allUsers: User[] = []
allUsers.push({name:"sam", isActive:true})

//Array inside array: 
const num: number[][] = [
    [1,2,3],
    //{} -> will show error
]

//Syntax2: 
const arr2: Array<string> = []
arr2.push("str input 2")

export {}


