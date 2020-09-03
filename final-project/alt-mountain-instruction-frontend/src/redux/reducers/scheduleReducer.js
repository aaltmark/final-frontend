import {EDIT_SCHEDULE, GET_ONE_SCHEDULE, FETCH_SCHEDULE, MAKE_SCHEDULE_AVAILABLE} from '../actions/types';

const initialState = []


export default function scheduleReducer(state = initialState, action){
    switch(action.type){
        case FETCH_SCHEDULE:
            return action.payload 
        case EDIT_SCHEDULE:
            console.log("state", state)
            console.log("payload", action.payload)
            return [...state].map((schedule) => {
                if (schedule.id !== action.payload.id){
                    return schedule
                } else {
                    return action.payload
                }
            })
        case MAKE_SCHEDULE_AVAILABLE:
            return action.payload
            // state.map((schedule) => {
            //     if (schedule.id !== action.payload.id) {
            //         return [schedule] 
            //     } else {
            //         return [action.payload]
            //     }
                
            // })
        case GET_ONE_SCHEDULE: 
            return action.payload
        default:
            return state
    }
}