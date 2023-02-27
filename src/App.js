import './css/undernavbar.css';
import React from 'react';
import "./css/App.css"
import { Routes, Route, Link } from 'react-router-dom'
import Home from "./Home"
import Faq from './Faq';
import Whitepaper from './Whitepaper';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/whitepaper' element={<Whitepaper />} />
        <Route path='/faq' element={<Faq />} />
    </Routes>

</div>
  );
}

export default App;
