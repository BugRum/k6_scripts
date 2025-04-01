import http from 'k6/http'
import { check } from 'k6'
import faker from 'https://cdn.skypack.dev/faker';

export const options = {
    vus: 10,
    duration: '5s',
}

const url = "https://reqres.in/api/users"
const payload = {
    "name": faker.name.findName(),
    "job": "QA"
}


export default function () {
    const response = http.post(url, payload);
    console.log("printing payload", payload);
    console.log("printing response", response.body);
    check(response, {
        'status code validation': (response) => response.status === 201,
        'Response Validation': (response) => response.body.includes('id')
    });
}