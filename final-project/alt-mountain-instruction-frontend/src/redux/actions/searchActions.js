import {
    SAVE_RESORT_ID,
    SAVE_RESORT_NAME,
    SAVE_SPECIALTY,
    SAVE_GROUP_SIZE,
    SAVE_GROUP_AGE,
    SAVE_GROUP_SKILL,
    SAVE_LESSON_QUANTITY,
    SAVE_LESSON_DATES
} from './types'

export const saveResortId = (resortId) => ({ type: SAVE_RESORT_ID, payload: resortId})

export const saveResortName = (resortName) => ({ type: SAVE_RESORT_NAME, payload: resortName})
export const saveSpecialty = (specialty) => ({ type: SAVE_SPECIALTY, payload: specialty})

export const saveGroupSize = (groupSize) => ({ type: SAVE_GROUP_SIZE, payload: groupSize})
export const saveGroupAge = (groupAge) => ({ type: SAVE_GROUP_AGE, payload: groupAge})
export const saveGroupSkill = (groupSkill) => ({ type: SAVE_GROUP_SKILL, payload: groupSkill})

export const saveLessonQuantity = (lessonQuantity) => ({ type: SAVE_LESSON_QUANTITY, payload: lessonQuantity})
export const saveLessonDates = (lessonDates) => ({ type: SAVE_LESSON_DATES, payload: lessonDates})

