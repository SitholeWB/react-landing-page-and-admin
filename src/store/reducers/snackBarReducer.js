import {
    SNACK_BAR_OPEN,
} from '../actions/snackBarActions'

// Initial State
const initialState = {
    message: '',
    open: false
};


// Reducers (Modifies The State And Returns A New State)
const snackBarReducer = (state = initialState, action) => {
    switch (action.type) {

        case SNACK_BAR_OPEN: return {
            ...state,
            open: action.open,
            message: action.message
        }
        // Default
        default: {
            return state;
        }
    }
};

// Exports
export default snackBarReducer;
