import React, { useEffect } from "react";
import axios from "axios";
import {  useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

const Dessert = () => {
  const [dessert, setDessert] = useState([]);

  const getData = async () => {
    const storage = localStorage.getItem("dessert");

    const isJson = (str) => {
      try {
        JSON.parse(str);
      } catch (e) {
        return false;
      }
      return true;
    };

    if (storage && isJson(storage)) {
      setDessert(JSON.parse(storage));
    } else {
      const { data } = await axios.get(
        `https://api.spoonacular.com/recipes/random?number=10&tags=dessert&apiKey=79943d6f4fdc475fb21b36f7b7a7d2bf`
      );
      localStorage.setItem("dessert", JSON.stringify(data.recipes));
      setDessert(data.recipes);
      console.log(data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h2>Recommended Desserts of the Week</h2>
      <Splide
        options={{
          perPage: 4,
          pagination: false,
          drag: "free",
          gap: "5rem",
        }}
      >
        {dessert.map((recipe) => {
          return (
            <>
              <SplideSlide key={recipe.id}>
                <p className="featured-title" key={recipe.id}>
                  {recipe.title}
                </p>
                <img
                  className="featured-image"
                  src={recipe.image}
                  alt={recipe.title}
                />
              </SplideSlide>
            </>
          );
        })}
      </Splide>
    </>
  );
};

export default Dessert;
