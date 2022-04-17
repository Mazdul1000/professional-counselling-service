
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs/Blogs';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import NotFound from './components/NotFound/NotFound';

import Header from './components/Shared/Header/Header';

function App() {
  return (
    <div className="App">
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}> </Route>
      <Route path='/home' element={<Home></Home>}> </Route>
      <Route path='/about' element={<About></About>}> </Route>
      <Route path='/blogs' element={<Blogs></Blogs>}> </Route>
      <Route path='/login' element={<Login></Login>}> </Route>
      <Route path='/register' element={<Register></Register>}> </Route>
      <Route path='*' element={<NotFound></NotFound>}> </Route>
    </Routes>
   
    </div>
  );
}

export default App;
