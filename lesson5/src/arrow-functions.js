const addArrayElements = (arr) => {
    if (!(Array.isArray(arr))) {
        console.log('Obtained value is not array!');
        return;
    };
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum;
};

const arrayNumbers = [1, 5, 3, 6];
console.log ('Sum of numbers array elements: ', addArrayElements(arrayNumbers));


const arrayStrings = ['first', 'second', 'third'];
console.log ('Sum of string array elements: ', addArrayElements(arrayStrings));

//const arrayNumbers2 = [];
//console.log ("Sum of numbers array elements: ", addArrayElements(arrayNumbers2));

