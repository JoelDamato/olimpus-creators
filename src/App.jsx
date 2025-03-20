import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import { Package } from './pages/Package';
import Footer from './components/Footer';

function App() {
  return (
  //   <Routes>
  //   <Route path="/" element={<Home />} />
  // </Routes>
      <div>
      <Home />
      <About />
      <Package />
      <Footer />
    </div>

  );
}

export default App;
