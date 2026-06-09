import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components Imports
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages Imports
import Home from './pages/Home';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';
import Gallery from './pages/Gallery';
import Registration from './pages/Registration';
import Contact from './pages/Contact';

function App() {
  // Initialize AOS Globally
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out'
    });
  }, []);

  return (
    <Router>
      <div className="bg-gray-900 text-white min-h-screen flex flex-col">
        {/* Global Navbar */}
        <Navbar />
        
        {/* Main Content Area Routes */}
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/event-details" element={<EventDetail />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;