// import logo from './logo.svg';
import './App.css';
// import './index1.css';
import React from "react";
import Navbar from'./componets/Navbar'
import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";
// import DownPage from './componets/index';
import Appointment from './componets/Appointment'

export default function App() {
  return (
    <>
    <BrowserRouter>
    {/* <Navbar></Navbar> */}
    <Routes>
      <Route path='/' element={<Navbar/>}/>
      {/* <DownPage></DownPage> */}
      <Route path='/appointment' element={<Appointment/>}/>
    </Routes>
    {/* <Navbar title="Tureline"/>
    <Home text=""/>
    <Routes>
      <Route path='/readmore' element={<MiddlePage/>}></Route>
    </Routes>
    <Routes>
      <Route path='/contact' element={<Contcat/>}></Route>
    </Routes> */}
    </BrowserRouter>
    </>
  );
}

 
