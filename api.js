import axios from 'axios';
const baseUrl = 'http://10.201.106.164:3000';
export default {
    test: {
        getTest: () => {
            axios.get(`${baseUrl}/api`).then((response) => {
                console.log('DMX', response.data);
            }).catch(err => console.log('ERR', err));
        },
    },
    services: {
        getSuggested: () => {
            axios.get(`${baseUrl}/api/suggested`)
                .then(response => { return response.data; })
                .catch(err => console.log('ERR', err));
        },
    },
};
