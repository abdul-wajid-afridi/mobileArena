import React from "react";
import AllProducts from "./pages/AllProducts";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import AdminDashboard from "./AdminDashboard/Pages/AdminDashboard";
import ErrrorPage from "./components/ErrrorPage";
import ManageProducts from "./AdminDashboard/Pages/ManageProducts";
import ManageReviews from "./AdminDashboard/Pages/ManageReviews";
import PostProduct from "./AdminDashboard/Pages/PostProduct";
import ContactUs from "./pages/ContactUs";
import CompareProducts from "./pages/CompareProducts";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";
const Index = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/compare" element={<CompareProducts />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        {/* Admin Dashboard */}
        <Route path="dashboard" element={<AdminDashboard />}>
          <Route path="manageproducts" element={<ManageProducts />} />
          <Route path="managereviews" element={<ManageReviews />} />
          <Route path="postproducts" element={<PostProduct />} />
        </Route>
        <Route path="/detail" element={<ProductDetails />} />
        <Route path="*" element={<ErrrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Index;
