import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutComponent from '../Pages/About';
import Navbar from '../Pages/Navbar';
import Home from '../Pages/Home';
import Donation from '../Pages/Donate';
import ImageGallery from '../Pages/ImageGallery';
import JoinNow from '../Pages/JoinNow';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<AboutComponent />} />
        <Route path='/Donate' element={<Donation />} />
        <Route path='/Gallery' element={<ImageGallery />} />
        <Route path='/JoinUs' element={<JoinNow/>} />
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;
