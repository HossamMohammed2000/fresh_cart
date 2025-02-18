import React from "react";
import style from "./Layout.module.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
React;
style;
function Layout() {
  return (
    <>
      <Navbar />
      <div className="container w-[80%] py-20 lg:py-12 my-5 ">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
export default Layout;