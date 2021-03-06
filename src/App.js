import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import AppMain from './Pages/Home/AppMain';
import AddTask from './Users/AddTask';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './Authentication/RequireAuth';
import AllTask from './Users/AllTask';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='appMain' element={<RequireAuth><AppMain></AppMain></RequireAuth>}>
          <Route index path='allTask' element={<AllTask></AllTask>}></Route>
          <Route path='addTask' element={<AddTask></AddTask>}></Route>
        </Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
