import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Mockman from "mockman-js";
import { Navbar } from "./components";
import { Home, Products, Wishlist, Cart, Login, Signup } from "./pages";
import { useAuth } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";
function App() {
  const {
    state: { isLoggedIn },
  } = useAuth();

  return (
    <div className="App">
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          // Define default options
          className: "",
          style: {
            minWidth: "280px",
          },
          success: {
            duration: 2000,
          },
        }}
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        {!isLoggedIn && <Route path="/signup" element={<Signup />} />}
        {!isLoggedIn && <Route path="/login" element={<Login />} />}
        <Route path="/mock" element={<Mockman />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
