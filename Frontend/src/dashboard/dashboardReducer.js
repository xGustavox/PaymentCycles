import { functions } from "lodash"

const INITIAL_STATE = {summary: {credit: 0, debt: 0}}

export default function(state = INITIAL_STATE, action) {
    
    switch(action.type) {
        case 'BILLIING_SUMMARY_FETCHED':
            return {
                ...state, summary: action.payload.data
            }
        default:
            return state
    }
}