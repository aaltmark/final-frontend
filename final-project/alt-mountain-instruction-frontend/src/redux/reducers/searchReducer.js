import {
    SAVE_RESORT_ID, SAVE_RESORT_NAME, 
    SAVE_SPECIALTY, 
    SAVE_GROUP_SIZE, SAVE_GROUP_AGE, SAVE_GROUP_SKILL,
    SAVE_LESSON_QUANTITY, SAVE_LESSON_DATES
} from '../actions/types';

const initialState = {
    resortId: null,
    resortName: null,
    specialty: null, 
    groupSize: null,
    groupAge: null,
    groupSkill: null,
    lessonQuantity: null,
    lessonDates: []
}

const searchResortIdReducer = (state = initialState.resortId, action) => {
    switch (action.type){
        case SAVE_RESORT_ID:
            return action.payload
        default:
            return state
    }
}

const searchResortNameReducer = (state = initialState.resortName, action) => {
    switch(action.type){
        case SAVE_RESORT_NAME:
            return action.payload
        default:
            return state
    }
}

const searchSpecialtyReducer = (state = initialState.specialty, action) => {
    switch(action.type){
        case SAVE_SPECIALTY:
            return action.payload
        default:
            return state
    }
}

const searchGroupSizeReducer = (state = initialState.groupSize, action) => {
    switch(action.type){
        case SAVE_GROUP_SIZE:
            return action.payload
        default:
            return state
    }
}

const searchGroupAgeReducer = (state = initialState.groupAge, action) => {
    switch(action.type){
        case SAVE_GROUP_AGE:
            return action.payload
        default:
            return state
    }
}

const searchGroupSkillReducer = (state = initialState.groupSkill, action) => {
    switch(action.type){
        case SAVE_GROUP_SKILL:
            return action.payload
        default:
            return state
    }
}

const searchLessonQuantityReducer = (state = initialState.lessonQuantity, action) => {
    switch(action.type){
        case SAVE_LESSON_QUANTITY:
            return action.payload
        default:
            return state
    }
}

const searchLessonDatesReducer = (state = initialState.lessonDates, action) => {
    switch(action.type){
        case SAVE_LESSON_DATES:
            return [...state, action.payload]
        default:
            return state
    }
}
export {
    searchResortNameReducer, searchResortIdReducer, 
    searchSpecialtyReducer, 
    searchGroupSizeReducer, searchGroupAgeReducer, searchGroupSkillReducer,
    searchLessonQuantityReducer, searchLessonDatesReducer
}