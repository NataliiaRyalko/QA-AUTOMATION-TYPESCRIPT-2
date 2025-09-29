const MY_VALUE = 50;
const MAX_VALUE = 200;
const MIN_VALUE = 50;

if (MY_VALUE > MIN_VALUE && MY_VALUE < MAX_VALUE) {
    console.log('MY_VALUE is in range');
} else if (MY_VALUE < MIN_VALUE || MY_VALUE > MAX_VALUE ) {
    console.log('MY_VALUE is out of range');
} else if (MY_VALUE == MAX_VALUE) {
    console.log('MY_VALUE == 200');
} else {
    console.log('MY_VALUE == 50');
}
