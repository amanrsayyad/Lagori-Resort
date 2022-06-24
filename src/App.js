import React from 'react';
import './App.css';
import Home from './pages/Home';
import Header from './component/Header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
