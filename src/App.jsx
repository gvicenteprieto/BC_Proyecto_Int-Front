import "./App.css";
import Footer from "./Components/Footer/Footer";
import Products from "./Components/Products/Products";
import { CartProvider } from "./Context/CartContext";
import { ProductProvider } from "./Context/ProductContext";
import { Routes, Route } from "react-router-dom";
// import ModalWelcome from "./Components/Modal/ModalWelcome";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Shops from "./Pages/Shops/Shops";
import Error from "./Pages/Error/Error";

function App() {
  return (
    <>
      <div className="App">
        {/* <ModalWelcome /> */}
        <ProductProvider>
          <CartProvider>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/update" element={<Products />} />
              <Route path="/shops" element={<Shops />} />
              <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
          </CartProvider>
        </ProductProvider>
      </div>
    </>
  );
}

export default App;
