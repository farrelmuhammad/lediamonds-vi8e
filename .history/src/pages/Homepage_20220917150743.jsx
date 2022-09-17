import React from "react";
import BestSelling from "../components/BestSelling";
import Blogs from "../components/Blogs";
import Category from "../components/Category";
import Content from "../components/Content";
import GetInspired from "../components/GetInspired";
import Header from "../components/Header";
import Jumbotron from "../components/Jumbotron";
import Products from "../components/Products";

const Homepage = () => {
  return (
    <>
      <Header />
      <Jumbotron />
      <Content />
      <Category />
      <Products />
      <BestSelling />
      <Blogs />
      <GetInspired />
    </>
  );
};

export default Homepage;
