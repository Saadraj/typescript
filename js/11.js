"use strict";
function rectArea(options) {
    return options.width * options.length;
}
const a = rectArea({
    length: 11,
    width: 22,
});
console.log(a);
class Player3 {
    constructor(name, age, adult) {
        this.name = name;
        this.age = age;
        this.adult = adult;
    }
    play() {
        console.log("playing");
    }
    getName() {
        return this.name;
    }
}
