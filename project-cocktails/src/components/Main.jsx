import React from "react";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Categories from "../more-components/Categories";
import Diet from "../cat-components/Diet";
import SearchTerm from "./SearchTerm";
import Recipe from "../cat-components/Recipe";

const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:type" element={<Diet />} />
        <Route path="/searched/:keyword" element={<SearchTerm />} />
        <Route path="/recipe/:name" element={<Recipe />}/>
      </Routes>
    </>
  );
};

export default Main;
