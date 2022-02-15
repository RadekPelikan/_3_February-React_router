import "./../App.css";
import Slide1 from "./presentation/Slide1";
import Slide2 from "./presentation/Slide2";
import Slide3 from "./presentation/Slide3";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// https://v5.reactrouter.com/web/example/nesting

function Presentaion() {
  return (
    <>
      <h1>Presentaion</h1>
      {/* <Router> */}
        <Routes>
          <Route path="/presentation/slide1" element={<Slide1 />} />
          <Route path="/slide2" element={<Slide2 />} />
          <Route path="/slide3" element={<Slide3 />} />
        </Routes>
      {/* </Router> */}
    </>
  );
}

export default Presentaion;
