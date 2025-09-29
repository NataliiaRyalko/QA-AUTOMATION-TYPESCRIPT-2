let myValue = 50;
let maxValue = 200;
let minValue = 50;

if (myValue > minValue && myValue < maxValue) {
    console.log('myValue is in range');
} else if (myValue < minValue || myValue > maxValue ) {
    console.log('myValue is out of range');
} else if (myValue == maxValue) {
    console.log('myValue == 200');
} else {
    console.log('myValue == 50');
}
