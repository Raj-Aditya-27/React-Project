import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/Page/Cart/Cart";
import Home from "./components/Page/Home/Home";
import ShopContextProvider from "./context/ShopContext";

function App() {
  return (
    <>
      <ShopContextProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </>
  );
}

export default App;
