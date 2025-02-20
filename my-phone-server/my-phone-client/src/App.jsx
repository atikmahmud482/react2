import { Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h1 className="text-3xl font-bold text-center">Home Page</h1>;
}

function About() {
  return <h1 className="text-3xl font-bold text-center">About Page</h1>;
}

function App() {
  return (
    <div className="text-center p-5">
      <nav className="flex gap-4 justify-center mb-5">
        <Link to="/" className="btn btn-primary">
          Home
        </Link>
        <Link to="/about" className="btn btn-secondary">
          About
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
