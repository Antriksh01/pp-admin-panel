import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import WhyChoose from "./components/WhyChoose";
import Information from "./components/Information";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Sidebar from "./components/Sidebar";
import Blog from "./components/Blog";
import About from "./components/About";
import BusinessOp from "./components/BusinessOp";
import { useAuth } from "./context/auth";
import ForgotPassword from "./components/ForgetPassword";

function App() {
  const [auth, setAuth] = useAuth();
  return (
    <>
      <Sidebar />
      <Routes>
        <Route exact path="/" element={auth.user ? <Homepage /> : <Login />} />
        <Route
          exact
          path="/why-choose-us"
          element={auth.user ? <WhyChoose /> : <Login />}
        />
        <Route
          exact
          path="/information"
          element={auth.user ? <Information /> : <Login />}
        />
        <Route exact path="/Blog" element={auth.user ? <Blog /> : <Login />} />
        <Route
          exact
          path="/About"
          element={auth.user ? <About /> : <Login />}
        />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/Profile" element={<Profile />} />
        <Route exact path="/forgot-password" element={<ForgotPassword />} />

        <Route
          exact
          path="/business-opportunity"
          element={auth.user ? <BusinessOp /> : <Login />}
        />
      </Routes>
    </>
  );
}

export default App;
