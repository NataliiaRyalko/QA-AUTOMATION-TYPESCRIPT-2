const arr = [11, 22, 33, 44, 55, 66, 77, 88, 99, 10];
let iterator;

console.log("----- Iterator from 0 to 9 in for loop -----");

for (const value of arr) {
    console.log(arr.indexOf(value));
};

console.log("----- Iterator from 0 to 9 in while loop -----");

iterator = 0;
while (iterator < arr.length) {
    console.log(iterator);
    iterator++;
}

console.log("----- Iterator from 0 to 9 in do-while loop -----");

iterator = 0;
do {
    console.log(iterator);
    iterator++;
} while (iterator < arr.length);

console.log("----- Iterator from 100 to 0 in for loop -----");

for (let i = 100; i >= 0; i -= 10) {
    console.log(i);
}

console.log("----- Iterator from 100 to 0 in while loop -----");

iterator = 100;
while (iterator >= 0) {
    console.log(iterator);
    iterator -= 10;
}

console.log("----- Iterator from 100 to 0 in do-while loop -----");

iterator = 100;
do {
    console.log (iterator);
    iterator -= 10;
} while (iterator >= 0);

