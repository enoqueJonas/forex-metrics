import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PairDetails from './pages/PairDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="details" element={<PairDetails />}/>
      </Routes>
    </div>
  );
}

export default App;
