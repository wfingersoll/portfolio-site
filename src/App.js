import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Navigation from './Components/Navigation';
import About from './Pages/About';
 
function App() {
  return (
    <div className="App">
    <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/portfolio-site" element={<Home />} />
          <Route path="/portfolio-site/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
