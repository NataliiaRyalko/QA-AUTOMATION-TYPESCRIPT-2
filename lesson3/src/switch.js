let myValue = true;

switch (myValue) {
    case false: {
        console.log('myValue === false');
        break;
    }
    case true: {
        console.log('myValue === true');
        break;
    }
    default:
        console.log('non of the conditions above');
}

myValue = 'text';

switch (myValue) {
    case 'TEXT': {
        console.log('myValue === TEXT');
        break;
    }
    case 'Text': {
        console.log('myValue === Text');
        break;
    }
    case 'text': {
        console.log('myValue === text');
        break;
    }
    default:
        console.log('non of the conditions above');
}
