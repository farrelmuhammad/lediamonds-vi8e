import React from "react";
import Category from "../components/Category";
import Content from "../components/Content";
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
    </>
  );
};

export default Homepage;
