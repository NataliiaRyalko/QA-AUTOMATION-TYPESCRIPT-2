async function sendRequestSrc(link) {
    const response = await fetch (link);
    console.log(response.ok);

    if (!response.ok) {
        throw new Error('Request failed');
    };
    return response.ok;
};

async function tryRequest() {
    const link1 = 'https://microsoftedge.github.io/Demos/json-dummy-data/missing-colon.json99';
    const link2 = 'https://microsoftedge.github.io/Demos/json-dummy-data/missing-colon.json5';

    try {
        if (await sendRequestSrc(link1)) {
            console.log('The first link works!');
            return;
        }
    } catch (error) {
        console.log(error);
        try {
            if (await sendRequestSrc(link2)) {
                console.log('The second link works!');
                return;
            }
        } catch (myError) {
            console.log('The site configured at this address does not contain the requested file.', myError);
        }
    }
}

tryRequest();
