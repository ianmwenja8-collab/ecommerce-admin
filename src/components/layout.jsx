import { Outlet } from "react-router-dom";
import Navbar from "../components/nav.jsx";

function Layout() {
  return (
    <div className="app-container">
      <Navbar />

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} E-Commerce Admin Portal</p>
      </footer>
    </div>
  );
}

export default Layout;