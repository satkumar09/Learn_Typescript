"use strict";
//Variables:
Object.defineProperty(exports, "__esModule", { value: true });
//string
var greetings = "Hello";
//greetings = 6 (will show error)
console.log(greetings);
//number 
var userId = 334455.3;
userId.toFixed();
//boolean
var isLoggedIn = false;
//for the above cases we donot need to declare the variable in this manner
//let number = 334455.3 or let greetings = "hello" will work fine but there are situation where this is important
//any
//let hero -> (not recommended) ts will automatically put the type of this variable as 'any'
var string;
function getHero() {
    return "thor";
}
hero = getHero();
