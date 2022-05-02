import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/index';
import logger from 'redux-logger'

// Middleware: Redux Persist Config
const persistConfig = {
  // Root?
  key: 'root',
  // Storage Method (React Native)
  storage: storage,
  // Whitelist (Save Specific Reducers)
  whitelist: [
    'authReducer',
    'loginReducer',
    'registerReducer',
  ],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: [
    'userReducer',
    'snackBarReducer'    
  ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk, logger],

});

export default store;