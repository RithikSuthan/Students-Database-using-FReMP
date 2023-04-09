import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './Navbar';
import React from 'react';
import Home from './Home';
import Add from './Add';
import Update from './Update';
import View from './View';
import Delete from './Delete';
import ViewIndividual from './ViewIndividual';
import Login from './Login';
import Register from './Register';
// import FrontNavbar from './FrontNavBar';
import FrontPage from './FrontPage';

function App() {
  return (
    <Router>
      {/* <FrontNavbar /> */}
      {/* <FrontPage/> */}
      <Routes>
        <Route  exact path="/" element={<FrontPage/>} />
        <Route path="/login/home" element={<Home/>} />
        <Route path="/login/Add" element={<Add/>} />
        <Route path="/login/View" element={<View/>} />
        <Route path="/login/View_Individual" element={<ViewIndividual/>} />
        <Route path="/login/Update" element={<Update/>} />
        <Route path="/login/Delete" element={<Delete/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Register" element={<Register/>} />
      </Routes>
    </Router>
  );
}

export default App;
