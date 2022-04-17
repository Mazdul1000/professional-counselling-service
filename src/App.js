
import { Button } from 'react-bootstrap';
import { Routes } from 'react-router-dom';
import './App.css';

import Header from './components/Shared/Header/Header';

function App() {
  return (
    <div className="App">
    <Header></Header>
    <h1 className='text-primary'>Hello from Mazdul</h1>
    <Routes>
    </Routes>
   
    </div>
  );
}

export default App;
