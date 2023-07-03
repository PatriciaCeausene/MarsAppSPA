import React from 'react';
import logo from './logo.svg';
import './App.css';
import {NASAInfoPage} from "./components/NASAInfoPage";
import {MyButton} from "./components/MyButton";
import NASA_logo from './images/NASA_logo.png'
import {TreeCounter} from "./components/TreeCounter";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function App() {
  return (
      <Router>
          <nav style={{ margin: 10 }}>
              <Link to="/" style={{ padding: 5 }}>
                  Home
              </Link>
              <Link to="/counter1" style={{ padding: 5 }}>
                  Counter1
              </Link>
              <Link to="/counter2" style={{ padding: 5 }}>
                  Counter2
              </Link>
          </nav>
        <Routes>
          <Route path="/" element={<NASAInfoPage textP1 = "NASA was established in 1958, succeeding the National Advisory Committee for Aeronautics (NACA), to give the U.S. space development effort a distinctly civilian orientation, emphasizing peaceful applications in space science. NASA has since led most American space exploration, including Project Mercury, Project Gemini, the 1968–1972 Apollo Moon landing missions, the Skylab space station, and the Space Shuttle. NASA supports the International Space Station and oversees the development of the Orion spacecraft and the Space Launch System for the crewed lunar Artemis program, Commercial Crew spacecraft, and the planned Lunar Gateway space station. The agency is also responsible for the Launch Services Program, which provides oversight of launch operations and countdown management for uncrewed NASA launches."
                               textP2 = "NASA's science is focused on better understanding Earth through the Earth Observing System; advancing heliophysics through the efforts of the Science Mission Directorate's Heliophysics Research Program; exploring bodies throughout the Solar System with advanced robotic spacecraft such as New Horizons and planetary rovers such as Perseverance; and researching astrophysics topics, such as the Big Bang, through the James Webb Space Telescope, and the Great Observatories and associated programs."
                               img = {NASA_logo}
                               title="NASA INFO"
                 />} />
          <Route path="/counter1" element={<MyButton />} />
          <Route path="/counter2" element={<TreeCounter />} />
        </Routes>
      </Router>
  );
}

export default App;
