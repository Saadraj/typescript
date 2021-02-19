"use strict";
var RType;
(function (RType) {
    RType[RType["SUCCESS"] = 0] = "SUCCESS";
    RType[RType["FAIL"] = 1] = "FAIL";
    RType[RType["PENDING"] = 2] = "PENDING";
    RType[RType["ERROR"] = 3] = "ERROR";
})(RType || (RType = {}));
// const d = "hello";
const dd = { name: "string" };
const data2 = {
    status: 200,
    type: RType.PENDING,
    body: dd,
};
console.log(data2);
