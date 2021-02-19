// Generic

const addId = <T>(obj: T) => {
    const id = Math.round(Math.random() * 1000);
    return { ...obj, id };
};
const addId2 = <T extends object>(obj: T) => {
    const id = Math.round(Math.random() * 1000);
    return { ...obj, id };
};

const aaa = addId({
    name: "aaa",
    age: 11,
});

console.log(aaa);

const str = addId("aaa");

console.log(str);

const str1 = { name: "bbb", age: 22, adult: false };
const bbb = addId(str1);
console.log(bbb);

const str3 = addId2("ccc"); //! Error for sending string

console.log(str3);

interface apiResponse<T> {
    status: number;
    body: T;
}

// const d = "hello";
const d = { name: "string" };

const data: apiResponse<typeof d> = {
    status: 200,
    body: d,
};

console.log(data)