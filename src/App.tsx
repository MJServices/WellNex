import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { ScrollToTop } from "@/components/ScrollToTop";
import { MouseFollower } from "@/components/MouseFollower";
import { Footer } from "@/components/Footer";
import { Home } from "@/pages/Home";
import { Apps } from "@/pages/Apps";
import { AboutPage } from "@/pages/AboutPage";
import { Contact } from "@/pages/Contact";

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="min-h-screen bg-dark-bg">
      {isHomePage && <MouseFollower />}
      <Navbar />
      <ScrollToTop />

      <main className="relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
