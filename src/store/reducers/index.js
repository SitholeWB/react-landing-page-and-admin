// Imports: Dependencies
import { combineReducers } from 'redux';

// Imports: Reducers
import authReducer from './authReducer';
import userReducer from './userReducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
	authReducer: authReducer,
	userReducer: userReducer,
});

// Exports
export default rootReducer;