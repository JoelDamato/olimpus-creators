import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
  //   <Routes>
  //   <Route path="/" element={<Home />} />
  // </Routes>
      <div>
      <Home />
      <About />
    </div>

  );
}

export default App;
