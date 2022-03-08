import React from 'react';
import {BrowserRouter as Router, 
  Route, 
  Link,
  Routes} from 'react-router-dom';
import Home from './routes/home';
import About from './routes/about';
import './App.css';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li> <Link to="/">Home</Link></li>
          <li> <Link to="/about">About</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
      <div className="App">
      </div>
    </Router>
  );
}

export default App;
