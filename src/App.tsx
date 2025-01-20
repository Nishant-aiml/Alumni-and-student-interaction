import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Events from './pages/Events';
import Directory from './pages/Directory';
import Mentorship from './pages/Mentorship';
import Jobs from './pages/Jobs';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/directory" element={<Directory />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/jobs" element={<Jobs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;