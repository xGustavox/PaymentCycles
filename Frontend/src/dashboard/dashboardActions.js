import axios from 'axios'
const BASE_URL = 'http://localhost:3004/api'

export function getSummary() {
    const request = axios.get(`${BASE_URL}/billingCycles/summary`)

    return {
        type: 'BILLIING_SUMMARY_FETCHED',
        payload: request
    }
}