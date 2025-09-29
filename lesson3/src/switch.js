const MY_VALUE = true;

switch (MY_VALUE) {
    case false: {
        console.log('MY_VALUE === false');
        break;
    }
    case true: {
        console.log('MY_VALUE === true');
        break;
    }
    default:
        console.log('non of the conditions above');
}

const MY_VALUE_TEXT = 'text';

switch (MY_VALUE_TEXT) {
    case 'TEXT': {
        console.log('MY_VALUE === TEXT');
        break;
    }
    case 'Text': {
        console.log('MY_VALUE === Text');
        break;
    }
    case 'text': {
        console.log('MY_VALUE === text');
        break;
    }
    default:
        console.log('non of the conditions above');
}
