"use strict";
{
    //nullable type
    const searchName = (value) => {
        if (value) {
            console.log('searching');
        }
        else {
            console.log("nothing to search");
        }
    };
    // searchName('sifat')
    // searchName(null)
    // unknwon typeof
    const getSpeedInMsper1 = (value) => {
        if (typeof value === "number") {
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`the speed is ${convertedSpeed} ms^-1`);
        }
        if (typeof value === 'string') {
            const [number, unit] = value.split(' ');
            const convertedSpeed = (parseFloat(number) * 1000) / 3600;
            console.log(`the speed is ${convertedSpeed} ms^-1`);
        }
        else {
            console.log('wrong input');
        }
    };
    // getSpeedInMsper1('45 kmh-1')
    // getSpeedInMsper1(600)
    // never type
    const throwError = (message) => {
        throw new Error(message);
        // this function will never return anything, it will just throw error so it's never type
    };
    throwError('problem hoyeche');
}
