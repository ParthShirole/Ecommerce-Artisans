import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Box } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Viewitems from './components/viewitems';
import Additems from './components/additems';
import Home from './components/Home';
import Detailitems from './components/Detailitems';
import Registerb from './components/register/registerb';
import Registers from './components/register/registers';
import Loginb from './components/register/loginb';
import Logins from './components/register/logins';


function App() {
  return (
      <BrowserRouter>
      <Box>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/add' element={<Additems/>}/>  
          <Route exact path='/items' element={<Viewitems/>}/>
          <Route exact path='/items/:id' element={<Detailitems/>}/>

          <Route exact path='/login/buyer' element={<Loginb />}/>
          <Route exact path='/login/seller' element={<Logins />}/>
          <Route exact path='/register/buyer' element={<Registerb />}/>
          <Route exact path='/register/seller' element={<Registers />}/>
          


        </Routes>
      </Box>
      
      </BrowserRouter>

  );
}

export default App;
