import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { SnackbarProvider } from 'notistack';
import './index.css';
import BookProvider from './context/BookContractFunctions';

ReactDOM.render(
  <BookProvider>
    <React.StrictMode>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <Provider store={store}>
          <PersistGate persistor={persistor} loading={<div>loading ...</div>}>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </PersistGate>
        </Provider>
      </SnackbarProvider>
    </React.StrictMode>
  </BookProvider>,
  document.getElementById('root')
);
