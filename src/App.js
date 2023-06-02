import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import "./theme/style.css";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<Home />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
