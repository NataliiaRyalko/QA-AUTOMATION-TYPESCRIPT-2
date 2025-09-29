const MY_VALUE = 5;
let someValue = 2;
let someNewValue = 'string';
const SOME_NEW_STRING = 'hello!';
const SOME_BOOL = true;
const SOME_NEW_BOOL = false;
const SOME_NULL = null;
const SOME_NEW_NULL = null;
const SOME_UNDEFINED = undefined;
const SOME_NEW_UNDEFINED = undefined;
const SOME_OBJECT = {name: 'Ivan', age: 25};
const SOME_NEW_OBJECT = {name: 'Ann', age: 55};
const SOME_SYMBOL = Symbol('!');
const SOME_NEW_SYMBOL = Symbol('#');

console.log('Arithmetic operations without changing variables:');
console.log('Sum of two values: ', MY_VALUE + someValue);
console.log('Difference of two values: ', MY_VALUE - someValue);
console.log( 'Product of two values: ', MY_VALUE * someValue);
console.log( 'Quotient of two values: ', MY_VALUE / someValue);
console.log( 'Remainder of two values: ', MY_VALUE % someValue);
console.log('Power of two values: ',  MY_VALUE ** someValue);

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
console.log('Difference of two values: ', MY_VALUE - someValue);

someValue = someValue * someNewValue;
console.log('Product of two values: ', MY_VALUE * someValue);

someValue = someValue / someNewValue;
console.log('Quotient of two values: ', MY_VALUE / someValue);

someValue = someValue % someNewValue;
console.log('Remainder of two values: ', MY_VALUE % someValue);

someValue = someValue ** someNewValue;
console.log('Power of two values: ', someValue);

console.log('Arithmetic operations without changing variable and with boolean types:');
console.log('Sum of two values: ', SOME_BOOL + SOME_NEW_BOOL);
console.log('Difference of two values: ', SOME_BOOL - SOME_NEW_BOOL);
console.log('Product of two values: ', SOME_BOOL * SOME_NEW_BOOL);
console.log('Quotient of two values: ', SOME_BOOL / SOME_NEW_BOOL);
//console.log('Remainder of two values: ', SOME_BOOL % SOME_NEW_BOOL);
console.log('Power of two values: ',  SOME_BOOL ** SOME_NEW_BOOL);

console.log('Arithmetic operations without changing variable and with boolean & different types:');
console.log('Sum of two values: ', SOME_BOOL + SOME_NULL);
console.log('Difference of two values: ', SOME_BOOL - SOME_NULL);
console.log('Product of two values: ', SOME_BOOL * MY_VALUE);
console.log('Quotient of two values: ', SOME_BOOL / SOME_OBJECT.age);
//console.log('Remainder of two values: ', SOME_BOOL % SOME_SYMBOL);
console.log('Power of two values: ',  SOME_BOOL ** undefined);

console.log('Arithmetic operations without changing variable and with string types:');
console.log('Sum of two values: ', someValue + SOME_NEW_STRING);
console.log('Difference of two values: ', someValue - SOME_NEW_STRING);
console.log('Product of two values: ', someValue * SOME_NEW_STRING);
console.log('Quotient of two values: ', someValue / SOME_NEW_STRING);
console.log('Remainder of two values: ', someValue % SOME_NEW_STRING);
console.log('Power of two values: ',  someValue ** SOME_NEW_STRING);

console.log('Arithmetic operations without changing variable and with null types:');
console.log('Sum of two values: ', SOME_NULL + SOME_NEW_NULL);
console.log('Difference of two values: ', SOME_NULL - SOME_NEW_NULL);
console.log('Product of two values: ', SOME_NULL * SOME_NEW_NULL);
console.log('Quotient of two values: ', SOME_NULL / SOME_NEW_NULL);
console.log('Remainder of two values: ', SOME_NULL % SOME_NEW_NULL);
console.log('Power of two values: ',  SOME_NULL ** SOME_NEW_NULL);

console.log('Arithmetic operations without changing variable and with undefined types:');
console.log( 'Sum of two values: ', SOME_UNDEFINED + SOME_NEW_UNDEFINED);
console.log( 'Difference of two values: ', SOME_UNDEFINED - SOME_NEW_UNDEFINED);
console.log( 'Product of two values: ', SOME_UNDEFINED * SOME_NEW_UNDEFINED);
console.log( 'Quotient of two values: ', SOME_UNDEFINED / SOME_NEW_UNDEFINED);
console.log( 'Remainder of two values: ', SOME_UNDEFINED % SOME_NEW_UNDEFINED);
console.log( 'Power of two values: ',  SOME_UNDEFINED ** SOME_NEW_UNDEFINED);

console.log('Arithmetic operations without changing variable and with symbol types:');
console.log('Sum of two values: ', SOME_SYMBOL.description+ SOME_NEW_SYMBOL.description);
console.log('Difference of two values: ', SOME_SYMBOL.description - SOME_NEW_SYMBOL.description);
console.log('Product of two values: ', SOME_SYMBOL.description * SOME_NEW_SYMBOL.description);
console.log('Quotient of two values: ', SOME_SYMBOL.description / SOME_NEW_SYMBOL.description);
console.log('Remainder of two values: ', SOME_SYMBOL.description % SOME_NEW_SYMBOL.description);
console.log('Power of two values: ',  SOME_SYMBOL.description ** SOME_NEW_SYMBOL.description);

console.log('Arithmetic operations without changing variable and with object types:');
console.log('Sum of two values: ', SOME_OBJECT + SOME_NEW_OBJECT);
console.log('Sum of two values: ', SOME_OBJECT.age + SOME_NEW_OBJECT.age);
console.log('Sum of two values: ', SOME_OBJECT.age + SOME_NEW_OBJECT.name);
console.log('Difference of two values: ', SOME_OBJECT.name - SOME_NEW_OBJECT.name);
console.log('Difference of two values: ', SOME_OBJECT.age - SOME_NEW_OBJECT.age);
console.log('Difference of two values: ', SOME_OBJECT.name - SOME_NEW_OBJECT.age );
console.log('Product of two values: ', SOME_OBJECT.name * SOME_NEW_OBJECT.name);
console.log('Product of two values: ', SOME_OBJECT.age * SOME_NEW_OBJECT.age);
console.log('Product of two values: ', SOME_OBJECT.name * SOME_NEW_OBJECT.age);
console.log('Quotient of two values: ', SOME_OBJECT.name / SOME_NEW_OBJECT.name);
console.log('Quotient of two values: ', SOME_OBJECT.age / SOME_NEW_OBJECT.age);
console.log('Quotient of two values: ', SOME_OBJECT.age / SOME_NEW_OBJECT.name);
console.log('Remainder of two values: ', SOME_OBJECT.name % SOME_NEW_OBJECT.name);
console.log('Remainder of two values: ', SOME_OBJECT.age % SOME_NEW_OBJECT.age);
console.log('Remainder of two values: ', SOME_OBJECT.age % SOME_NEW_OBJECT.name);
console.log('Power of two values: ',  SOME_OBJECT.name ** SOME_NEW_OBJECT.name );
console.log('Power of two values: ',  SOME_OBJECT.age ** SOME_NEW_OBJECT.age );
console.log('Power of two values: ',  SOME_OBJECT.age ** SOME_NEW_OBJECT.name );
