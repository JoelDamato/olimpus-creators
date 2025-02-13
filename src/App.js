import { Routes, Route, Link } from 'react-router-dom';
import Entrenamiento from './Entrenamiento';
import Tpage from './Tpage'
import Home from './Home';

function App() {
  return (

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/entrenamiento" element={<Entrenamiento />} />
        <Route path="/tpage" element={<Tpage />} />
      </Routes>

  );
}

export default App;
