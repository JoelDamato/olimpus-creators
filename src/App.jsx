import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { Package2 } from "./pages/Package2";
import { Package } from "./pages/Package";
import Footer from "./components/footer/Footer";
import FooterImages from "./components/footer/FooterImages";
import PoliticaCompra from "./pages/PoliticaCompra";

function App() {
  return (
    <>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Package />
                <FooterImages />
                <Footer />
              </>
            }
          />
          <Route
            path="/2"
            element={
              <>
                <Home />
                <About />
                <Package2 />
                <FooterImages />
                <Footer />
              </>
            }
          />
          <Route
            path="/politica-compra"
            element={
              <>
                <PoliticaCompra />
                <Footer /> 
              </>
            }
          />
        </Routes>
    </>
  );
}

export default App;
