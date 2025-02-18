import React from "react";
import style from "./Home.module.css";
// import RecentProducts from "../RecentProducts/RecentProducts";
import CategoriesSlider from "../../components/CategoriesSlider/CategoriesSlider";
import MainSlider from "../../components/MainSlider/MainSlider";
import RecentProducts from "../RecentProducts/RecentProducts";
React;
style;

function Home() {
  return (
    <>
      <MainSlider />
      <CategoriesSlider />;
      <RecentProducts />;
    </>
  );
}
export default Home;
