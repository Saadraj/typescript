
enum RType{
	SUCCESS,
	FAIL,
	PENDING,
	ERROR
}

interface apiResponse2<T> {
	status: number;
	type:RType
    body: T;
}

// const d = "hello";
const dd = { name: "string" };

const data2: apiResponse2<typeof dd> = {
    status: 200,
	type:RType.PENDING,
	body: dd,
};

console.log(data2)