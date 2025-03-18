import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import { Package } from './pages/Package';

function App() {
  return (
  //   <Routes>
  //   <Route path="/" element={<Home />} />
  // </Routes>
      <div>
      <Home />
      <About />
      <Package />
    </div>

  );
}

export default App;
