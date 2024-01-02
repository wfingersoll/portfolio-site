import './App.css';
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './Pages/Home';
import Navigation from './Components/Navigation';
import About from './Pages/About';
import CareerTimeline from './Pages/CareerTimeline';
 
function App() {
  return (
    <div className="App">
    <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/timeline' element={<CareerTimeline />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
