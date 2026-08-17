import { Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/nav.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
       <Navbar />

       <Routes>
        <Route path="/" element={<LandingPage />} />
        </Routes>
        </div>
        </Router> 

    </Router>
  );
}


export default App;
