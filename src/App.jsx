import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Bot from './components/Bot';
import Exit from './components/Exit'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bot" element={<Bot />} />
        <Route path="/exit" element={<Exit />} />
      </Routes>
    </Router>
  );
};

export default App;
