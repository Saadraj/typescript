const func = () => {
    console.log("hello");
};

let myFunc = Function;
myFunc = 5; //!Error

myFunc = () => {
    console.log("valid");
};
const anotherFunc = (a: string, b: string, optional?: string) => {
    console.log(`hello ${a} ${b} ${optional && optional}`);
};

anotherFunc(1, 2);
anotherFunc("aa", 2);
anotherFunc("aa", "bb");
anotherFunc("aa", "bb", "cc");
anotherFunc("aa", "bb", 3);

const withReturn = (a: string, b: string): number => {
    return +a + +b;
};

console.log(withReturn(1, 2));
