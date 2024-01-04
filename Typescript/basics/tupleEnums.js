"use strict";
//Tuple and Enums
Object.defineProperty(exports, "__esModule", { value: true });
//Tuple
var user;
//user = [131, "hc", false]   //shows error, due to order-mismatch
user = ["hc", 131, true]; //this works fine
var newUser = [112, "ex@mail.com"];
newUser[1] = "we can overright this";
newUser.push(true);
