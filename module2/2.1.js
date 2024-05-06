"use strict";
{
    //type assersion
    let anything;
    anything = "next level web development";
    anything = 123;
    anything.toString;
    const kgTogm = (value) => {
        if (typeof value === 'string') {
            const converteValue = parseFloat(value) * 1000;
            return converteValue;
        }
        if (typeof value === 'number') {
            return value * 1000;
        }
        const result1 = kgTogm(234);
        try {
        }
        catch (error) {
            console.log((error));
        }
    };
    //
}
