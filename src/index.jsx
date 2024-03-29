import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import MainPage from './Presentation/Main/MainPage';
import LoginPage from './Presentation/Login/LoginPage';
import AboutPage from './Presentation/AboutUs/AboutPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/hola_react/' element={<LoginPage/>}/>
        <Route path='/hola_react/main' element={<MainPage/>}/>
        <Route path='/hola_react/about' element={<AboutPage/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
