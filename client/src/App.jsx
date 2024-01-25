import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Nav } from "./components";
import { Home } from "./pages";

function App() {
  return (
    <div>
      <Router>
        <Nav />
      </Router>
    </div>
  );
}

export default App;
