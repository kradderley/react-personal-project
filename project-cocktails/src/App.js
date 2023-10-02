import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [cocktail, setCocktail] = useState("");

  const getData = async () => {
    try {
      const { data } = await axios.get(``);
      setCocktail(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  });

  return <></>;
};

export default App;
