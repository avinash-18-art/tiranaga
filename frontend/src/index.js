import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Language from './components/Language';

import Customer from './components/Customer';
import Begginer from './components/Begginer';
import About from './components/About';
import Agency from './components/Agency';
import Wallet from './components/Wallet';
import Account from './components/Account';
import Poker from './components/Poker';
import Add from './components/Add';
import Jili from './components/Jili';
import Pg from './components/Pg';
import Game from './components/Game';
import SmallGame from './components/SmallGame';
import HotGame from './components/HotGame';
import Evolution from './components/Evolution';
import Download from './components/Download';
import Go from './components/Go';
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

     {
    path: "/Poker",
    element: <Poker/>,
  },

    {
    path: "/Add",
    element: <Add/>,
  },

     {
    path: "/Jili",
    element: <Jili/>,
  },

     {
    path: "/Pg",
    element: <Pg/>,
  },

      {
    path: "/Game",
    element: <Game/>,
  },

     {
    path: "/SmallGame",
    element: <SmallGame/>,
  },

  {
    path: "/HotGame",
    element: <HotGame/>,
  },

    {
    path: "/Evolution",
    element: <Evolution/>,
  },

     {
    path: "/Download",
    element: <Download/>,
  },

  
     {
    path: "/Go",
    element: <Go/>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
