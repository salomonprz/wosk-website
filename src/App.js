import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'; // Your existing home page
import Updates from './Updates'; // New updates page
import MeetTheTeam from './MeetTheTeam'; // New meet the team page
import ScrollToTop from './ScrollToTop'; // Import the ScrollToTop component

const App = () => {
  return (
    <Router>
      <ScrollToTop /> {/* Add the ScrollToTop component here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="/meet-the-team" element={<MeetTheTeam />} />
      </Routes>
    </Router>
  );
};

export default App;