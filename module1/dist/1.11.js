"use strict";
var _a, _b;
{
    //ternary operator
    const age = 18;
    if (age >= 18) {
        console.log("Adult");
    }
    else {
        console.log("not adult");
    }
    const isAdult = age >= 18 ? "adult" : "not adult";
    console.log({ isAdult });
    //nullish coalescing operator
    //  null / undefined er oper decession making
    const isAuthenticated = "";
    const result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Guest";
    const result2 = isAuthenticated ? isAuthenticated : "Guest";
    console.log({ result1 }, { result2 });
    const user = {
        name: 'sifat',
        address: {
            city: 'Dhaka',
            road: 23,
            presentAddress: "motijheel",
            permanentAddress: "motijheel"
        }
    };
    // ??= nullish coalescing operator
    const myAddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : "no permanent address";
    console.log({ myAddress });
}
