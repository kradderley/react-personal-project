import React from "react";
import Home from "./Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Categories from "../more-components/Categories";
import Diet from "../cat-components/Diet";

const Main = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:type" element={<Diet />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Main;
