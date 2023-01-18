import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PairDetails from './pages/PairDetails';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="details" element={<PairDetails />}/>
      </Routes>
    </div>
  );
}

export default App;
