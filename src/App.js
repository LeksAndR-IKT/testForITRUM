import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './Components/FormForData/Form.jsx';
import React, {useState} from 'react';
import Start from './Components/StartComponent/StartComponent.jsx';
import ModalWindow from './Components/ModalWindow/ModalWindow.jsx';

let App = () => {
  const [active, setActive] = useState(true)
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/form' element={<Form />} />
          <Route path='/' element={<Start />} />
        </Routes>
        <div className='btn'>
          <button className='but-form' onClick={() => setActive(false)}>Заполнить форму (второй вариант)</button>
        </div>
        <ModalWindow active = {active} setActive={setActive}/>
      </div>
    </BrowserRouter>


  );
}
export default App;
