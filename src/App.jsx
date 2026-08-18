import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/Landingpage.jsx";
import ProductPage from "./Pages/Productpage.jsx";
import SearchPage from "./Pages/SearchPage.jsx";
import AddProductPage from "./Pages/AddProductPage.jsx";
import Layout from "./components/layout.jsx";
import { ProductProvider } from "./components/ProductContext.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ProductProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/add-product" element={<AddProductPage />} />
          </Route>
        </Routes>
      </ProductProvider>
    </BrowserRouter>
  );
}

export default App;

