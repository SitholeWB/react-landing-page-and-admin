// Imports: Dependencies
import { combineReducers } from 'redux';

// Imports: Reducers
import authReducer from './authReducer';
import userReducer from './userReducer';
import loginReducer from './loginReducer';
import registerReducer from './registerReducer';
import snackBarReducer from './snackBarReducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
	authReducer: authReducer,
	userReducer: userReducer,
	registerReducer: registerReducer,
	snackBarReducer: snackBarReducer,
	loginReducer: loginReducer
});

// Exports
export default rootReducer;