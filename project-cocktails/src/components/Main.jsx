import React from "react";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Categories from "../more-components/Categories";
import Diet from "../cat-components/Diet";
import Keyword from "./Keyword";

const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:type" element={<Diet />} />
        <Route path="/searched/:keyword" element={<Keyword />} />
      </Routes>
    </>
  );
};

export default Main;
