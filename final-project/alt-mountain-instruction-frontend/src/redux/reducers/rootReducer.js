import { combineReducers } from 'redux'
import errorReducer from './errorReducer'
import authReducer from './authReducer'
import resortReducer from './resortReducer';
import instructorReducer from './instructorReducer'
import {
    searchResortIdReducer, searchResortNameReducer, 
    searchSpecialtyReducer,
    searchGroupSizeReducer, searchGroupAgeReducer, searchGroupSkillReducer, 
    searchLessonQuantityReducer, searchLessonDatesReducer
} from './searchReducer'



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
    searchLessonDates: searchLessonDatesReducer
})

export default rootReducer;