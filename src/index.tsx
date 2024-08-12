import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router/Router';
import { GlobalStyle } from './styles/GlobalStyle';
import { GlobalFont } from './assets/fonts/GlobalFont';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <GlobalFont />
    <RouterProvider router={router} />
  </React.StrictMode>,
);
