import React from 'react';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Posts from './pages/Posts';
import 'bootstrap/dist/css/bootstrap.min.css'
import Shop from './pages/Shop';
import Wishlist from './pages/Wishlist';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

function App() {
  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/posts' element={<Posts/>} />
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/wishlist' element={<Wishlist/>}/>
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/signup' element={<Signup/>}/>
          </Routes>
        </BrowserRouter>
        <Footer/>
      </div>
   
    </>
  );
}

export default App;
