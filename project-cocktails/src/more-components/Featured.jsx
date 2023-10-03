import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "../more-components/Featured.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Featured = () => {
  const [featured, setFeatured] = useState([]);

  const getData = async () => {
    try {
      const { data } = await axios.get(
        `https://api.spoonacular.com/recipes/random?number=10&apiKey=79943d6f4fdc475fb21b36f7b7a7d2bf?`
      );
      setFeatured(data.recipes);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h2>Featured Meals of the Day</h2>
      {featured.map((recipe) => {
        return (
          <>
            <SplideSlide>
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
    </>
  );
};

export default Featured;
