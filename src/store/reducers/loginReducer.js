import {
    LOGIN_EMAIL,
    LOGIN_OPEN
} from '../actions/loginActions'

// Initial State
const initialState = {
    open: false,
    email: ""
};


// Reducers (Modifies The State And Returns A New State)
const loginReducer = (state = initialState, action) => {
    console.log({ state })
    switch (action.type) {

        case LOGIN_EMAIL: return {
            ...state,
            email: action.email
        }

        case LOGIN_OPEN: return {
            ...state,
            open: action.open
        }

        // Default
        default: {
            return state;
        }
    }
};

// Exports
export default loginReducer;
