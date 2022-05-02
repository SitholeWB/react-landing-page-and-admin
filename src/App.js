import { BrowserRouter, Switch } from 'react-router-dom';
import Main from './Main'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import configureStore from './store/config/store';
import { Provider } from 'react-redux';

let persistor = persistStore(configureStore);

function App() {
  return (

    <Provider store={configureStore}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Main />
        </BrowserRouter >
      </PersistGate>
    </Provider>
  );
}

export default App;