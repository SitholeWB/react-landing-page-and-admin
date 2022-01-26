import {
    LOGIN,
    LOGOUT,
    ERROR
} from '../actions/authActions'

// Initial State
const initialState = {
    error: '',
    tokenObject: null
};


// Reducers (Modifies The State And Returns A New State)
const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case LOGIN: return {
            ...state,
            tokenObject: action.tokenObject
        }

        case LOGOUT: return {
            ...state,
            tokenObject: null
        }

        case ERROR: return {
            ...state,
            error: action.error
        }

        // Default
        default: {
            return state;
        }
    }
};

// Exports
export default authReducer;
