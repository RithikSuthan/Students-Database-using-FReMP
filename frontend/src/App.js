import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Add from './Add';
import Update from './Update';
import View from './View';
import Delete from './Delete';
import ViewIndividual from './ViewIndividual';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/Add" element={<Add/>} />
        <Route path="/View" element={<View/>} />
        <Route path="/View_Individual" element={<ViewIndividual/>} />
        <Route path="/Update" element={<Update/>} />
        <Route path="/Delete" element={<Delete/>} />
      </Routes>
    </Router>
  );
}

export default App;
