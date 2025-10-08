function addArrayElements (arr) {
    if (!(Array.isArray(arr))) {
        console.log('Obtained value is not array!');
        return;
    };
    if (arr.length === 0) {
        console.log('Array is empty!');
        return;
    };
    const sum = arr.reduce((acc, item) => acc += item);
    return sum;
};

const arrayNumbers = [1, 5, 3, 6];
console.log ('Sum of numbers array elements: ', addArrayElements(arrayNumbers));


const arrayStrings = ['first', 'second', 'third'];
console.log ('Sum of string array elements: ', addArrayElements(arrayStrings));

//const arrayNumbers2 = [];
//console.log ("Sum of numbers array elements: ", addArrayElements(arrayNumbers2));

//const objectNumbers2 = {a: 1, b: 2};
//console.log ("Sum of numbers array elements: ", addArrayElements(objectNumbers2));
