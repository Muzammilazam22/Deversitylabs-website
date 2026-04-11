import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Hire from './pages/Hire';
import Services from './pages/Services';
import About from './pages/About';
import Solutions from './pages/Solutions';
import GenericPage from './pages/GenericPage';
import CustomCursor from './components/CustomCursor';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <CustomCursor />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/hire" element={<Hire />} />
            <Route path="/services" element={<Services />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/industries" element={<GenericPage title="Industries" description="Explore our tailored software and digital transformation strategies across finance, healthcare, retail, and more. Full content launching soon." />} />
            <Route path="/blog" element={<GenericPage title="Blog & Insights" description="Stay up-to-date with the latest trends in AI, Cloud Infrastructure, and Modern Web Engineering. Articles coming soon." />} />
            <Route path="/careers" element={<GenericPage title="Careers" description="Join DeversityLabs. We are looking for elite engineers, designers, and strategists to build the future. Roles opening soon." />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
