import http from 'k6/http'
import { check } from 'k6'

export const options = {
    vus: 10,
    duration: '5s',
}
const url = "https://reqres.in/api/users"
const payload = {"name": "ruhi", "job":  "QA"}

export default function () {
    const response = http.post(url,payload )
       // {"name": "ruhi", "job":  "QA"})
    console.log("printing payload",payload)
    console.log("printing response",response.body)
    check(response,
        {'status code validation': (response)=> response.status===201,
        'Response Id Validation': (response) => response.body.includes('id')  })
    
}