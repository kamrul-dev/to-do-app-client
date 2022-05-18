import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import AppMain from './Pages/Home/AppMain';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='appMain' element={<AppMain></AppMain>}></Route>
      </Routes>
    </div>
  );
}

export default App;
