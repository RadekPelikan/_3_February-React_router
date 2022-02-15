import './App.css';
import Home from "./pages/Home";
import Presentaion from "./pages/Presentation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact index element={<Home />} />
          <Route path="/presentation" element={<Presentaion />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
