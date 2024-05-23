import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './Components/FormForData/Form.jsx';
import React from 'react';

let App = () => {
  return (
    <BrowserRouter>
    <div className='App'>
        <Routes>
          <Route path='/form' element={<Form/>} />
          <Route path='/' element={<div className='btn'><NavLink to='/form'>Заполнить форму</NavLink></div>}/>
        </Routes>
       </div> 
    </BrowserRouter>
    
        
  );
}
export default App;
