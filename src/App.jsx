import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/nav.jsx";
import LandingPage from "./Pages/Landingpage.jsx";
import Productpage from "./Pages/Productpage.jsx";
import Searchpage from "./Pages/SearchPage.jsx";
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

