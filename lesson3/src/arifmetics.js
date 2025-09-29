let myValue = 5;
let someValue = 2;
let someNewValue = 'string';
let someNewString = 'hello!';
let someBool = true;
let someNewBool = false;
let someNull = null;
let someNewNull = null;
let someUndefined = undefined;
let someNewUndefined = undefined;
let someObject = {name: 'Ivan', age: 25};
let someNewObject = {name: 'Ann', age: 55};
let someSymbol = Symbol('!');
let someNewSymbol = Symbol('#');

console.log('Arithmetic operations without changing variables:');
console.log('Sum of two values: ', myValue + someValue);
console.log('Difference of two values: ', myValue - someValue);
console.log( 'Product of two values: ', myValue * someValue);
console.log( 'Quotient of two values: ', myValue / someValue);
console.log( 'Remainder of two values: ', myValue % someValue);
console.log('Power of two values: ',  myValue ** someValue);

console.log('Arithmetic operations with changing variable:');
someValue += someValue;
console.log('Sum: ', someValue);

someValue -= someValue;
console.log('Difference: ', someValue);

someValue = 5;
someValue *= someValue;
console.log('Product: ', someValue);

someValue /= someValue;
console.log('Quotient', someValue);

someValue %= someValue;
console.log('Remainder: ', someValue);

someValue = 3;
someValue **= someValue;
console.log('Power', someValue);

console.log('Arithmetic operations with changing variable and with different types:');
someValue = someValue + someNewValue;
console.log('Sum of two values: ', someValue);

someValue = 10;
someNewValue = '5';
someValue = someValue + someNewValue;
console.log('Sum of two values: ', someValue);

someValue = someValue - someNewValue;
console.log('Difference of two values: ', myValue - someValue);

someValue = someValue * someNewValue;
console.log('Product of two values: ', myValue * someValue);

someValue = someValue / someNewValue;
console.log('Quotient of two values: ', myValue / someValue);

someValue = someValue % someNewValue;
console.log('Remainder of two values: ', myValue % someValue);

someValue = someValue ** someNewValue;
console.log('Power of two values: ', someValue);

console.log('Arithmetic operations without changing variable and with boolean types:');
console.log('Sum of two values: ', someBool + someNewBool);
console.log('Difference of two values: ', someBool - someNewBool);
console.log('Product of two values: ', someBool * someNewBool);
console.log('Quotient of two values: ', someBool / someNewBool);
//console.log('Remainder of two values: ', someBool % someNewBool);
console.log('Power of two values: ',  someBool ** someNewBool);

console.log('Arithmetic operations without changing variable and with boolean & different types:');
console.log('Sum of two values: ', someBool + someNull);
console.log('Difference of two values: ', someBool - someNull);
console.log('Product of two values: ', someBool * myValue);
console.log('Quotient of two values: ', someBool / someObject.age);
//console.log('Remainder of two values: ', someBool % someSymbol);
console.log('Power of two values: ',  someBool ** undefined);

console.log('Arithmetic operations without changing variable and with string types:');
console.log('Sum of two values: ', someValue + someNewString);
console.log('Difference of two values: ', someValue - someNewString);
console.log('Product of two values: ', someValue * someNewString);
console.log('Quotient of two values: ', someValue / someNewString);
console.log('Remainder of two values: ', someValue % someNewString);
console.log('Power of two values: ',  someValue ** someNewString);

console.log('Arithmetic operations without changing variable and with null types:');
console.log('Sum of two values: ', someNull + someNewNull);
console.log('Difference of two values: ', someNull - someNewNull);
console.log('Product of two values: ', someNull * someNewNull);
console.log('Quotient of two values: ', someNull / someNewNull);
console.log('Remainder of two values: ', someNull % someNewNull);
console.log('Power of two values: ',  someNull ** someNewNull);

console.log('Arithmetic operations without changing variable and with undefined types:');
console.log( 'Sum of two values: ', someUndefined + someNewUndefined);
console.log( 'Difference of two values: ', someUndefined - someNewUndefined);
console.log( 'Product of two values: ', someUndefined * someNewUndefined);
console.log( 'Quotient of two values: ', someUndefined / someNewUndefined);
console.log( 'Remainder of two values: ', someUndefined % someNewUndefined);
console.log( 'Power of two values: ',  someUndefined ** someNewUndefined);

console.log('Arithmetic operations without changing variable and with symbol types:');
console.log('Sum of two values: ', someSymbol.description + someNewSymbol.description);
console.log('Difference of two values: ', someSymbol.description - someNewSymbol.description);
console.log('Product of two values: ', someSymbol.description * someNewSymbol.description);
console.log('Quotient of two values: ', someSymbol.description / someNewSymbol.description);
console.log('Remainder of two values: ', someSymbol.description % someNewSymbol.description);
console.log('Power of two values: ',  someSymbol.description ** someNewSymbol.description);

console.log('Arithmetic operations without changing variable and with object types:');
console.log('Sum of two values: ', someObject + someNewObject);
console.log('Sum of two values: ', someObject.age + someNewObject.age);
console.log('Sum of two values: ', someObject.age + someNewObject.name);
console.log('Difference of two values: ', someObject.name - someNewObject.name);
console.log('Difference of two values: ', someObject.age - someNewObject.age);
console.log('Difference of two values: ', someObject.name - someNewObject.age );
console.log('Product of two values: ', someObject.name * someNewObject.name);
console.log('Product of two values: ', someObject.age * someNewObject.age);
console.log('Product of two values: ', someObject.name * someNewObject.age);
console.log('Quotient of two values: ', someObject.name / someNewObject.name);
console.log('Quotient of two values: ', someObject.age / someNewObject.age);
console.log('Quotient of two values: ', someObject.age / someNewObject.name);
console.log('Remainder of two values: ', someObject.name % someNewObject.name);
console.log('Remainder of two values: ', someObject.age % someNewObject.age);
console.log('Remainder of two values: ', someObject.age % someNewObject.name);
console.log('Power of two values: ',  someObject.name ** someNewObject.name );
console.log('Power of two values: ',  someObject.age ** someNewObject.age );
console.log('Power of two values: ',  someObject.age ** someNewObject.name );
