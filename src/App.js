import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { ThemeProvider } from 'styled-components';
import light from './styles/themes/Light';
import store, { persistor } from './store';
import history from './services/history';
import GlobalStyle from './styles/GlobalStyles';
import Header from './components/Header';
import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <ThemeProvider theme={light}>
            <GlobalStyle />
            <Header />
            <Routes />
            <ToastContainer autoClose={3000} className="toast-container" />
          </ThemeProvider>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
