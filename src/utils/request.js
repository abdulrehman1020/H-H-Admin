import axios from 'axios'

const request = axios.create({
    baseURL:  'http://localhost:8000/api',
    withCredentials: true,
})

request.interceptors.response.use(
    response => response,
    error => {
        if (!error.response) {
            const error = {
                error: 'No response from the server, please try again later',
            };
            const data = { response: { data: error } };
            return Promise.reject(data);
        }
        return Promise.reject(error);
    },
);

export default request