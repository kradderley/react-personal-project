import React, { useEffect, useState } from "react";
import axios from "axios";
import Home from "./components/Home";
import Search from "./components/Search";

const App = () => {

  return (
    <>
      <Search />
      <Home />
    </>
  );
};

export default App;
