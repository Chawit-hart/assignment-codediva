import React from 'react';
import Navbar from './component/navbar';
import Promotion from './component/promotion';
import Deal from './component/Deal';
import Download from './component/Download';
import Register from './register';
import Login from './login';
import Footer from './component/footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



const Home = () => {
  return (
    <Router>
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomeContent />} />
        <Route path="Register" element={<Register />} />
        <Route path="Login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
    </Router>
  )
}

const HomeContent = () => {
  return (
    <div>
      <Promotion />
      <Deal />
      <Download />
    </div>
  );
}



export default Home;
