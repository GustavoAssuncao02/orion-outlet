import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Location from "../pages/LocationPage/LocationPage";
import Login from "../pages/Login/Login";
import Product from "../pages/Product/Product";
import Search from "../pages/Search/Search";
import Admin from "../pages/Admin/Admin";
import AddItems from "../pages/AddItems/AddItems";
import ShirtsDetails from "../pages/Details/ShirtsDetails/ShirtsDetails";

function router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location" element={<Location />} />
        <Route path="/product-detail" element={<Product />} />
        <Route path="/login-admin" element={<Login />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/AddItems" element={<AddItems />} />
        <Route path="/shirts/:id" element={<ShirtsDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default router;
