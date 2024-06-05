import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import OrderSummary from "./Components/OrderSummary";
import NoMatch from "./Components/NoMatch";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="order-summary" element={<OrderSummary />}></Route>
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </>
  );
}

export default App;
