import http from 'k6/http'
import { check } from 'k6'


export const options = {
    vus: 10,
    duration: '5s',
}
const url = "https://reqres.in/api/users"
export default function () {
    const response = http.post(url,
        {"name": "ruhi", "job":  "QA"})
    
    check(response,
        {'status code validation': (response)=> response.status===201,
        'Response Id Validation': (response) => response.body.includes('id')  })
    
}