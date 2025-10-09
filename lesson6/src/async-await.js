async function sendRequest() {
    const response = await fetch ('https://microsoftedge.github.io/Demos/json-dummy-data/missing-colon.json');
    console.log(response.ok, response.status);

    if (!response.ok) {
        throw new Error('Request failed');
    };

    return await response.json();
};

async function getLanguagesList () {
    try {
        const data = await sendRequest();
        const languages = data.map(item => item.language);
        console.log(languages);
    } catch (error) {
        console.log('Error occurred while retrieving languages', error);
    };
}
getLanguagesList();
