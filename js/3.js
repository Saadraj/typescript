"use strict";
let a;
a = "aaa";
console.log(a);
a = 11;
console.log(a);
let b;
b = "bbb";
console.log(b);
b = 22; //! Error for number
console.log(b);
const array = [];
array.push("aaa");
console.log(array);
array.push(22); //! Error for inserting number
console.log(array);
const anotherArray = [];
anotherArray.push("aa");
anotherArray.push(33);
anotherArray.push(true); // ! Error for inserting boolean
let obj;
obj = { name: "name" };
console.log(obj);
let anotherObject;
anotherObject = {
    name: "11",
    age: "11",
    adult: 2,
};
let arrayObject;
arrayObject = []; //! valid
arrayObject = {}; //! valid
anotherObject = []; //!invalid
