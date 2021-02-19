"use strict";
const userDetails = (id, user) => {
    console.log(id);
    console.log(user);
};
const sayHello = (user) => {
    console.log(user);
};
userDetails(false, { name: 11, age: false });
sayHello({ name: 11, age: false });
