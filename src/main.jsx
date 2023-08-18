import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
//import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Login } from './pages/Login.jsx';
import { ErrorPage } from './pages/ErrorPage.jsx';
import { Usuario } from './pages/usuario.jsx';
import { Cadastro } from './pages/Cadastro.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/usuario",
    element: <Usuario/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/cadastro",
    element: <Cadastro/>,
    errorElement: <ErrorPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
