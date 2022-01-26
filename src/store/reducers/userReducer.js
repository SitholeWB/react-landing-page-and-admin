import {
    REGISTER,
    ERROR
} from '../actions/userActions'

// Initial State
const initialState = {
    error: '',
    user: null
};


// Reducers (Modifies The State And Returns A New State)
const userReducer = (state = initialState, action) => {
    switch (action.type) {

        case REGISTER: return {
            ...state,
            user: action.userObject
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
export default userReducer;
