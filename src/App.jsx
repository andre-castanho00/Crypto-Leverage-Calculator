import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./responsive.css";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import ReactGA from "react-ga4";

ReactGA.initialize("G-92YB8DQJVP");

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
