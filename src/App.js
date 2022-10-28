import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import SingleCourse from './components/Banner/SingleCourse';
import Checkout from './pages/Checkout';
import Course from './pages/Course';
import Home from './pages/Home';
import Notfound from './pages/Notfound';
import Login from './shared/Login';
import Signup from './shared/Signup';
import RequireAuth from './utilitis/RequireAuth';
import Blog from './pages/Blog';

export const ThemeContext = React.createContext('theme')

function App() {

  const [dark, setDark] = useState(false)

  return (
    <ThemeContext.Provider value={[dark, setDark]}>
      <div className="App">
        <Routes>
          <Route path='/courses' element={
            <RequireAuth>
              <Course></Course>
            </RequireAuth>
          } />
          <Route path='/blogs' element={<Blog></Blog>}></Route>
          <Route path='/courses/:id' element={<SingleCourse></SingleCourse>} />
          <Route path='/checkout/:id' element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          } />
          <Route path='/login' element={<Login></Login>} />
          <Route path='/signup' element={<Signup></Signup>} />
          <Route path='/' element={<Home></Home>} />
          <Route path='*' element={<Notfound></Notfound>} />
        </Routes>
        <ToastContainer />
      </div>
    </ThemeContext.Provider >
  );
}

export default App;
