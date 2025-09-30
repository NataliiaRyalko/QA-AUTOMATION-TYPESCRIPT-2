const myValue = 50;
const maxValue = 200;
const minValue = 50;

if (myValue > minValue && myValue < maxValue) {
    console.log('myValue is in range');
} else if (myValue < minValue || myValue > maxValue ) {
    console.log('myValue is out of range');
} else if (myValue == maxValue) {
    console.log('myValue == 200');
} else {
    console.log('myValue == 50');
}
