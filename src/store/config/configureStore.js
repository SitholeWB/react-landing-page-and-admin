// Imports: Dependencies
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import localForage from "localforage";
// Imports: Redux
import rootReducer from '../reducers/index';

// Middleware: Redux Persist Config
const persistConfig = {
  // Root?
  key: 'root',
  // Storage Method (React Native)
  storage: localForage,
  // Whitelist (Save Specific Reducers)
  whitelist: [
    'authReducer',
  ],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: [
    'userReducer'
  ],
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

// Redux: configureStore
const configureStore = createStore(
  persistedReducer,
  applyMiddleware(
    thunk
  ),
);

// Middleware: Redux Persist Persister
let persistor = persistStore(configureStore);

// Exports
export {
  configureStore,
  persistor,
};
