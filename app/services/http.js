import axios from 'axios'

const http = axios.create({
    baseURL: 'http://api.shinnytech.com',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Accept': 'application/json',
        'Shinny-Session': ''
    }
})

// before request
const interceptor = http.interceptors.request.use(function(config){
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
})

// before response data
const interceptor = http.interceptors.response.use(function(response){
    // Do something with response data
    console.log('response.data : ', response.data);
    console.log('response.status : ', response.status);
    console.log('response.statusText : ', response.statusText);
    console.log('response.headers : ', response.headers);
    console.log('response.config : ', response.config);
    return response;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
})

module.exports = http;