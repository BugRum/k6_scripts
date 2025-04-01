import http from 'k6/http'
import exec from 'k6/execution'
import { sleep } from 'k6'
export default function () {
    http.get("https://google.com/")
    const durationInSeconds = exec.scenario.duration
    sleep(durationInSeconds)
}
export const options = {
    vus: 10,
    duration: '5s',
}
