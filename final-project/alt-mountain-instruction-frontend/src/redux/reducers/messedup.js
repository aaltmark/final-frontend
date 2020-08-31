// import { combineReducers } from 'redux'

// const defaultState = { //anything that will need to change throughout app 
//     user: [],
//     // searches: [],
//     // requests: [],
//     // lessons: [],
//     // reviews: [],
//     // error: {}
// }

// const initialAuthState = {
//     token: localStorage.getItem('token'),
//     isAuthenticated: null,
//     isLoading: false,
//     user: null
// }

// function usersReducer(currentState = defaultState.users, action){
//     switch(action.type){
//         case "sign_in_user":
//             return [...currentState, action.payload]
    
//     default: 
//         return currentState
//     }

// }

// function searchesReducer(currentState = defaultState.searches, action){
//     switch(action.type){
//         case "add_search": 
//             return [...currentState, action.payload]

    
//     default: 
//         return currentState
//     }
// }

// function requestsReducer(currentState = defaultState.searches, action){
//     switch(action.type){
//         case "add_search": 
//             return [...currentState, action.payload]
//     default: 
//         return currentState
//     }
// }

// function lessonsReducer(currentState = defaultState.searches, action){
//     switch(action.type){
//         case "add_search": 
//             return [...currentState, action.payload]
//     default: 
//         return currentState
//     }
// }

// function reviewsReducer(currentState = defaultState.searches, action){
//     switch(action.type){
//         case "add_search": 
//             return [...currentState, action.payload]
//     default: 
//         return currentState
//     }
// }

// function authReducer(state = initialAuthState, action){
//     switch(action.type) {
//         case "user_loading":
//             return {
//                 ...state, isLoading: true
//             }
//         case "user_loaded":
//             return {
//                 ...state, 
//                 isAuthenticated: true,
//                 isLoading: false,
//                 user: action.payload
//             }
//         case "login_success":
//         case "register_success":
//             return {
//                 ...state, 
//                 ...action.payload,
//                 isAuthenticated: true,
//                 isLoading: false,
//             }
//         case "auth_error":
//         case "login_fail":
//         case "logout_success":
//         case "register_fail":
//             return{
//                 ...state,
//                 token: null,
//                 user: null,
//                 isAuthenticated: false,
//                 isLoading: false
//             }
//         default: 
//             return state; 
//     }


// }

// function errorReducer(currentState = defaultState.error, action){
//     switch(action.type){
//         case "get_errors":
//             return {
//                 error: action.payload
//             }
//         case "clear_errors":
//             return{
//                 error: {}
//             }
//         default: 
//             return currentState    
//     }
// }


    

// const rootReducer = combineReducers({
//     users: usersReducer,
//     searches: searchesReducer,
//     requests: requestsReducer,
//     lessons: lessonsReducer,
//     reviews:reviewsReducer,
//     error: errorReducer,
//     auth: authReducer
// })

// export default rootReducer;