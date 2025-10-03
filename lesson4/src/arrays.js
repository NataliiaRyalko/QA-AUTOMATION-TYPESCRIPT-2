const arrayStrings = ['1_text++', '1_text', '2_text', '3_text'];
const arrayNumbers = [5, 7, 9, 888, 0.5];
const arrayBoolean = [true, false, false, true];
const arrayAny = ["1_any text", 77,  {a: 5, b: 10}, true, 5];

console.log(" ----- Check Includes ----- ");

console.log(arrayStrings.includes('2_text'));
console.log(arrayNumbers.includes(888));
console.log(arrayBoolean.includes(false));
console.log(arrayAny.includes({a: 5, b: 10})); // seems like it's better to use other method in this case
console.log(arrayAny.includes(77));

console.log(" ----- Check Find ----- ");

console.log(arrayStrings.find(str => str === '1_text'));
console.log(arrayNumbers.find(num => num === 9));
console.log(arrayBoolean.find(bool => bool === false));
console.log(arrayAny.find(obj => obj.a === 5 &&  obj.b === 10));

console.log(" ----- Check filter ----- ");

console.log(arrayStrings.filter(str => str.includes('3_text')));
console.log(arrayNumbers.filter(num => num % 1 === 0));
console.log(arrayBoolean.filter(bool => bool == 1));
console.log(arrayBoolean.filter(bool => bool === true));
console.log(arrayAny.filter(obj => obj.a));

console.log(" ----- Check sort ----- ");

console.log(arrayStrings.sort((a, b) => a.length - b.length));
console.log(arrayNumbers.sort((a, b) => a - b));
console.log(arrayBoolean.sort((a, b) => b - a));
console.log(arrayAny.sort());

console.log(" ----- Check join separator ----- ");

console.log(arrayStrings.join('*'));
console.log(arrayNumbers.join('*'));
console.log(arrayBoolean.join('*'));
console.log(arrayAny.join('*'));

console.log(" ----- Check reverse ----- ");

console.log(arrayStrings.reverse());
console.log(arrayNumbers.reverse());
console.log(arrayBoolean.reverse());
console.log(arrayAny.reverse());

console.log(" ----- Check pop ----- ");

console.log("Deleted value: ", arrayStrings.pop(), "Array after pop: ", arrayStrings);
console.log("Deleted value: ", arrayNumbers.pop(), "Array after pop: ", arrayNumbers);
console.log("Deleted value: ", arrayBoolean.pop(), "Array after pop: ", arrayBoolean);
console.log("Deleted value: ", arrayAny.pop(), "Array after pop: ", arrayAny);

console.log(" ----- Check push ----- ");
console.log("New array length: ", arrayStrings.push("NeW_test"), "Array after push: ", arrayStrings);
console.log("New array length: ", arrayNumbers.push(33), "Array after push: ", arrayNumbers);
console.log("New array length: ", arrayBoolean.push(true), "Array after push: ", arrayBoolean);
console.log("New array length: ", arrayAny.push({c: 8}), "Array after push: ", arrayAny);

console.log(" ----- Check slice ----- ");

console.log(arrayStrings.slice(2));
console.log(arrayNumbers.slice(3));
console.log(arrayBoolean.slice(1));
console.log(arrayAny.slice(4));

console.log(" ----- Check reduce ----- ");

console.log(arrayStrings.reduce((str, currentValue) => str.length > currentValue.length ? str : currentValue));
console.log(arrayNumbers.reduce((num, currentValue) => num > currentValue ? num : currentValue));
console.log(arrayBoolean.reduce((bool, currentValue) => bool || currentValue, false));
console.log(arrayAny.reduce((any, currentValue) => (typeof currentValue === 'object' && currentValue != null ? currentValue : any ), null));


console.log(" ----- Check concat ----- ");

console.log(arrayStrings.concat(arrayAny, arrayBoolean, arrayNumbers));


console.log(" ----- Check forEach ----- ");

let newArray = [];
arrayStrings.forEach((v) => {
    newArray.push(v);
});
console.log(newArray);


console.log(" ----- Check Array Map ----- ");

newArray = arrayStrings.map((v) => v.toUpperCase());
console.log(newArray);
