import http from 'k6/http';
import { check, sleep } from 'k6';

// Configuration for the test
export let options = {
  stages: [
    { duration: '120s', target: 10 }, // 10 users for 120 seconds
  ],
};

export default function () {
  // Request URL
  const url = 'https://acl.mgapis.com/customer-reviews-ms/v2/activeReviews?filter=%7B%22order%22%3A%5B%22createdAt%20DESC%22%2C%22rating%20DESC%22%5D%2C%22limit%22%3A10%2C%22skip%22%3A0%2C%22where%22%3A%7B%22itemTag%22%3A%22Pack%20Of%203%20Makeup%20Blenders%22%2C%22itemType%22%3A%22product%22%2C%22containImage%22%3Atrue%7D%7D&userAttributes=true&getMarketPlaceReviews=true&vendorCode=mgp&countryFilter=IND&languageFilter=EN&apikey=cbd186249dc1504f530f1b809cc98fe3';

  // Request headers
  const headers = {
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'en-US,en;q=0.9,en-GB;q=0.8',
    'origin': 'https://www.myglamm.com',
    'priority': 'u=1, i',
    'referer': 'https://www.myglamm.com/',
    'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
    'sec-ch-ua-mobile': '?1',
    'sec-ch-ua-platform': '"Android"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'cross-site',
    'user-agent': 'Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36',
  };

  // Send the GET request
  const response = http.get(url, { headers: headers });

  // Check the response status
  check(response, {
    'is status 200': (r) => r.status === 200,
  });

  // Optional: Pause between requests
  //sleep(1); // Adjust sleep as per your requirements
}
