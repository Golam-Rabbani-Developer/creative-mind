import { Routes, Route, Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Home from './pages/Home';
import Login from './shared/Login';
import Signup from './shared/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login></Login>} />
        <Route path='/signup' element={<Signup></Signup>} />
        <Route path='/' element={<Home></Home>} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
