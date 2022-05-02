import {
    REGISTER_EMAIL,
    REGISTER_LAST_NAME,
    REGISTER_FIRST_NAME,
    REGISTER_LOCATION,
    REGISTER_OPEN
} from '../actions/registerActions'

// Initial State
const initialState = {
    open: false,
    email: "",
    firstName: "",
    lastName: "",
    location: "",
};


// Reducers (Modifies The State And Returns A New State)
const registerReducer = (state = initialState, action) => {

    switch (action.type) {

        case REGISTER_EMAIL: return {
            ...state,
            email: action.email
        }

        case REGISTER_FIRST_NAME: return {
            ...state,
            firstName: action.firstName
        }
        case REGISTER_LAST_NAME: return {
            ...state,
            lastName: action.lastName
        }
        case REGISTER_LOCATION: return {
            ...state,
            location: action.location
        }

        case REGISTER_OPEN: return {
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
export default registerReducer;
