"use strict";
//Object: Collection of named values
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "satya",
    email: "satya@mai.com",
    isActive: true,
};
//function taking object as parameters
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "hitesh", isPaid: false });
//createUser({name: "hitesh", isPaid: false, email: "s@s.com"})    ->   gives error
var newUser = { name: "hitesh", isPaid: false, email: "s@s.com" };
createUser(newUser); // doesn't gives error even when email is passed as argument
//function with return type object
function createCourse() {
    return { name: "", price: 0 };
}
//we can simply pass the object as parameter
function createUser_t(user) {
}
createUser_t({ _id: "", name: "", email: "", isActive: true });
