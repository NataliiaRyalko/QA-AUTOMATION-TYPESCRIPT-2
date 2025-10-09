function sendRequest() {
    return fetch ('https://microsoftedge.github.io/Demos/json-dummy-data/missing-colon.json')
        .then((response) => {
            console.log(response.ok, response.status);
            return response.json();
        })
        .catch ((e) => console.log (e));
};

function getLanguagesList () {
    sendRequest()
        .then ((data) => {
            const languages = data.map(item => item.language);
            console.log(languages);
        })
        .catch ((e) => console.log('Error occurred while retrieving languages', e));
}

getLanguagesList();
