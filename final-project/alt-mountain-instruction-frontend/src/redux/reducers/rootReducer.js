import { combineReducers } from 'redux'
import resortReducer from './resortReducer';
import instructorReducer from './instructorReducer'
import {
    searchResortIdReducer, searchResortNameReducer, 
    searchSpecialtyReducer,
    searchGroupSizeReducer, searchGroupAgeReducer, searchGroupSkillReducer, 
    searchLessonQuantityReducer, searchLessonDatesReducer
} from './searchReducer'

import userReducer from './userReducer'
import errorReducer from './errorReducer'
import scheduleReducer from './scheduleReducer';
import lessonReducer from './lessonReducer'




const rootReducer = combineReducers({
    // error: errorReducer,
    // auth: authReducer
    resorts: resortReducer,
    instructors: instructorReducer,

    searchResortId: searchResortIdReducer,
    searchResortName: searchResortNameReducer,

    searchSpecialty: searchSpecialtyReducer,

    searchGroupSize: searchGroupSizeReducer,
    searchGroupAge: searchGroupAgeReducer,
    searchGroupSkill: searchGroupSkillReducer,

    searchLessonQuantity: searchLessonQuantityReducer,
    searchLessonDates: searchLessonDatesReducer,

    users: userReducer,
    errors: errorReducer,

    schedules: scheduleReducer,
    lessons: lessonReducer



})

export default rootReducer;