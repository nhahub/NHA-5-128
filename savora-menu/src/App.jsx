import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import MenuPage from "./pages/Menu/MenuPage";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import OffersPage from "./components/Offers/OffersPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/offers" element={<OffersPage />} />
      </Routes>
    </BrowserRouter>
  );
}