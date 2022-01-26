import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import './styles/styles.css';
import { theme } from './theme/theme';
import { configureStore, persistor } from './store/config/configureStore';
import { PersistGate } from 'redux-persist/es/integration/react'




const App = () => (
  <Provider store={configureStore}>
    <PersistGate loading={null} persistor={persistor}>
      <MuiThemeProvider theme={theme}>
        <AppRouter />
      </MuiThemeProvider>
    </PersistGate>
  </Provider>
);


export default App;
