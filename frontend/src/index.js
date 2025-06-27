import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Language from './components/Language';
import Announcement from './components/Announcement';
import Customer from './components/Customer';
import Begginer from './components/Begginer';
import About from './components/About';
import Agency from './components/Agency';
import Wallet from './components/Wallet';
import Account from './components/Account';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Activity from './components/Activity';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },

    {
    path: "/Login",
    element: <Login/>,
  },

    {
    path: "/Language",
    element: <Language/>,
  },
    {
    path: "/Announcement",
    element: <Announcement/>,
  },

  {
    path: "/Customer",
    element: <Customer/>,
  },
   {
    path: "/Begginer",
    element: <Begginer/>,
  },

   {
    path: "/About",
    element: <About/>,
  },
   {
    path: "/Activity",
    element: <Activity/>,
  },

    {
    path: "/Agency",
    element: <Agency/>,
  },

     {
    path: "/Wallet",
    element: <Wallet/>,
  },

     {
    path: "/Account",
    element: <Account/>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
