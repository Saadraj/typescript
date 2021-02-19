function add(a: number, b: number) {
    return a + b;
}

console.log(add(11, 22));

// !  arrayOfString
// * assigned in declaration
const arrayOfString = ["apple", "banana", "orange"];

arrayOfString.push("lemon");

// ! arrayOfMix
const arrayOfMix = ["aaa", true, 11];

arrayOfMix.push("bbb");
arrayOfMix.push(false);
arrayOfMix.push(22);
arrayOfMix.push(["ccc", "ddd"]); // ! Error for array type data

console.log(arrayOfMix);

const user = {
    name: "name",
    age: 11,
    adult: false,
};

user.age='33' // ! error for string
console.log(user)
