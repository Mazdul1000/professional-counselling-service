
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs/Blogs';
import CheckOut from './components/CheckOut/CheckOut';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import RequireAuth from './components/Login/RequireAuth/RequireAuth';
import NotFound from './components/NotFound/NotFound';

import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import Loading from './components/Loading/Loading';

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
      <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>}>
        </Route>
      <Route path='*' element={<NotFound></NotFound>}> </Route>
    </Routes>
   <Footer></Footer>
    </div>
  );
}

export default App;
