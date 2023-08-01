import React from "react";
import Header from "../pages/header/Header";
import Footer from "../pages/footer/Footer";
import { Outlet } from "react-router-dom";
import "./Main.css"

const Main = () => {
  return (
    <div>
      <Header />
      <div className="app-container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
