import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Mockman from "mockman-js";
import { Navbar } from "./components";
import {
  Home,
  Products,
  Wishlist,
  Cart,
  Login,
  Signup,
  SingleProduct,
  Profile,
  OrderSummary,
} from "./pages";
import { useAuth } from "./context/AuthContext";
import { ToasterWrapper } from "./utils/ToasterWrapper";
function App() {
  const {
    state: { isLoggedIn },
  } = useAuth();

  return (
    <div className="App">
      <ToasterWrapper />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:productId" element={<SingleProduct />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/order-summary" element={<OrderSummary />} />
        {!isLoggedIn && <Route path="/signup" element={<Signup />} />}
        {!isLoggedIn && <Route path="/login" element={<Login />} />}
        <Route path="/mock" element={<Mockman />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
