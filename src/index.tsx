import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router/Router';
import { GlobalStyle } from './styles/GlobalStyle';
import { GlobalFont } from './assets/fonts/GlobalFont';
import { store } from './store/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <GlobalFont />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
