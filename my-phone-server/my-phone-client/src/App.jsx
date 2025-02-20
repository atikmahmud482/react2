import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar"; // Check if this file exists

function Home() {
  return <h1 className="text-3xl font-bold text-center">Home Page</h1>;
}

function About() {
  return <h1 className="text-3xl font-bold text-center">About Page</h1>;
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
///////kfdjlfkjkf
