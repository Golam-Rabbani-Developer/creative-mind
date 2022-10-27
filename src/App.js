import { Routes, Route, Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import SingleCourse from './components/Banner/SingleCourse';
import Course from './pages/Course';
import Home from './pages/Home';
import Login from './shared/Login';
import Signup from './shared/Signup';
import RequireAuth from './utilitis/RequireAuth';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/courses' element={
          <RequireAuth>
            <Course></Course>
          </RequireAuth>
        } />
        <Route path='/courses/:id' element={<SingleCourse></SingleCourse>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/signup' element={<Signup></Signup>} />
        <Route path='/' element={<Home></Home>} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
