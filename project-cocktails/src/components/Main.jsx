import React from "react";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Diet from "../cat-components/Diet";
import SearchTerm from "../cat-components/SearchTerm";
import Recipe from "../cat-components/Recipe";

const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories/:type" element={<Diet />} />
        <Route path="/searched/:keyword" element={<SearchTerm />} />
        <Route path="/recipe/:name" element={<Recipe />}/>
      </Routes>
    </>
  );
};

export default Main;
