import React from "react";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Diet from "../home-page-components/data-components/Diet";
import SearchedResult from "../home-page-components/data-components/SearchedResult";
import Recipe from "../home-page-components/data-components/Recipe";

const Pages = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories/:type" element={<Diet />} />
          <Route path="/searched/:keyword" element={<SearchedResult/>} />
          <Route path="/recipe/:name" element={<Recipe />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Pages;
