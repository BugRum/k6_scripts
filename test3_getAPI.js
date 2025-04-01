import http from 'k6/http'
import {check} from 'k6'


export const options = 
{
    vus : 10,
    iterations : 20
}
let headers = 
{
    'Authorisation' : 
}
export default function()
{
    const response = http.get ("https://acl.mgapis.com/absurdity-ms/recommendations/bestseller?identifier=default&vendorCode=mgp&apikey=b671b2cd3db4dbf339b954817c88aa11") 
    check(response,{'status code validation':(response)=> response.status===200

    })
}

