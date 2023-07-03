import React from 'react';
import logo from './logo.svg';
import './App.css';
import {NASAInfoPage} from "./components/NASAInfoPage";
import {MyButton} from "./components/MyButton";
import NASA_logo from './images/NASA_logo.png'
import {TreeCounter} from "./components/TreeCounter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NASAInfoPage textP1 = "NASA stands for National Aeronautics and Space Administration. NASA is a U.S. government agency that is responsible for science and technology related to air and space. The Space Age started in 1957 with the launch of the Soviet satellite Sputnik."
                      textP2 = "NASA opened for business on Oct. 1, 1958. The agency was created to oversee U.S. space exploration and aeronautics research."
                      img = {NASA_logo}
                      title="NASA INFO"
        />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyButton />
        <TreeCounter />
      </header>
    </div>
  );
}

export default App;
