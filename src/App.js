import { Routes, Route, Link } from 'react-router-dom';
import Entrenamiento from './Entrenamiento';
import Home from './Home';

function App() {
  return (

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/entrenamiento" element={<Entrenamiento />} />
      </Routes>

  );
}

export default App;
