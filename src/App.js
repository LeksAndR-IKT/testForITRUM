import { BrowserRouter} from 'react-router-dom';
import './App.css';
import React, {useState} from 'react';
import ModalWindow from './Components/ModalWindow/ModalWindow.jsx';

let App = () => {
  const [active, setActive] = useState(true)
  return (
    <BrowserRouter>
      <div className='App'>
        <div className='btn'>
          <button className='but-form' onClick={() => setActive(false)}>Заполнить форму</button>
        </div>
        <ModalWindow active = {active} setActive={setActive}/>
      </div>
    </BrowserRouter>


  );
}
export default App;
