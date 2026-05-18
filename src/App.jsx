import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Admin from "./pages/Admin";

import ProductProvider from "./context/ProductContext";

function App() {
  return (
    <BrowserRouter>
      <ProductProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>

        <Footer />
      </ProductProvider>
    </BrowserRouter>
  );
}


export default App;