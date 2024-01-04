//Union: combination of datatypes

let score: number | string = 33
score = 44
score = "55"
//no error in the above code

type User = {
    name: string,
    id: number,
}
type Admin = {
    username: string,
    id: number
}

let sam: User | Admin = {name: "sam", id: 333}
sam = {username: "sm", id: 333}
//no error even when properties changed

function getDbId(id: number | string){
    //making some API calls console.log
    //id.toLowerCase() -> will show error
    if(typeof id === "string"){
        id.toLowerCase()   //this is fine
    }
    console.log(`DB id is: ${id}`);
}
getDbId(3)
getDbId("3")

//Array: 
const data: number[] = [1,2,3]
const data2: string[] = ["1","2","3"]
//const data3: string[] | number[] = ["1","2","3",3] -> error, it will only take either number or string 
const data4: (string | number | boolean)[] = ["1","2","3", 4, true]


let seatAllotment: "aisle" | "middle" | "window"
seatAllotment = "aisle"
//seatAllotment = "crew" -> error
export {}