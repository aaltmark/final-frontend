import {EDIT_SCHEDULE, GET_ONE_SCHEDULE} from '../actions/types';

const initialState = []


export default function scheduleReducer(state = initialState, action){
    switch(action.type){
        case EDIT_SCHEDULE:
            console.log("state", state)
            console.log("payload", action.payload)
            return state.map((schedule) => {
                if (schedule.id !== action.payload.id) {
                    return schedule 
                } else {
                    return action.payload
                }
                
            })
        case GET_ONE_SCHEDULE: 
            return action.payload
        default:
            return state
    }
}