import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Nav } from "./components";
import { Home, Create } from "./pages";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
