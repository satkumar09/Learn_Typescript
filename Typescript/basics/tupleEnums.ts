//Tuple and Enums

//Tuple
let user: [string, number, boolean]

//user = [131, "hc", false]   //shows error, due to order-mismatch
user = ["hc", 131, true]   //this works fine

type User = [number, string]
const newUser: User = [112, "ex@mail.com"]

newUser[1] = "we can overright this"

//Enum
enum SeatChoice {
    AISLE,        //by default =0
    MIDDLE=19,
    WINDOW,       //now it will have a value =20
}
const hcSeat = SeatChoice.AISLE

//although the above code might generate to much code when converted into JS
//to avoid that use: const enum SeatChoice {}

export{}

