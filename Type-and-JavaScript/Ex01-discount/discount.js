"use strict";
//Solution 1
let values = [];
let discount = [];
let finalPrice = [];
for (let i = 0; i < 25; i++) {
    values[i] = 500 + (100 * i);
    discount[i] = i + 1;
    finalPrice[i] = values[i] - (values[i] * (discount[i] / 100));
}
console.log(`Purchase value - Discounts(%) - Final Price`);
for (let i = 0; i < 25; i++) {
    console.log(`    R$: ${values[i].toString().padEnd(14)}${discount[i].toString().padEnd(12)}R$: ${finalPrice[i].toString().padEnd(5)}`);
}
// Solution 2
