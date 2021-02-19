"use strict";
console.log("hello");
var a = "aaa";
console.log(a);
var aa = function () { return "hello " + a; };
console.log(aa());
var player = /** @class */ (function () {
    function player() {
    }
    player.prototype.eat = function () {
        console.log("Eat");
    };
    return player;
}());
var p1 = new player();
p1.eat();
console.log('vvvvv');
var obj = {
    name: 'name'
};
