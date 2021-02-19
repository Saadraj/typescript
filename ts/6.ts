type strOrNum = string | number;
type userType = { name: string; age: number };

const userDetails = (id: strOrNum, user: userType) => {
    console.log(id);
    console.log(user);
};

const sayHello = (user: userType) => {
    console.log(user);
};

userDetails(false, { name: 11, age: false });
sayHello({ name: 11, age: false });
