import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";
import { FeaturedWrapper, FeaturedCard } from "../Styling";


const Featured = () => {
  const [featured, setFeatured] = useState([]);

  // const getData = async () => {
  //   const { data } = await axios.get(
  //     `https://api.spoonacular.com/recipes/random?number=12&apiKey=${process.env.REACT_APP_API_KEY_ONE}`
  //   );
  //   setFeatured(data.recipes);
  //   console.log(data);
  // };

  const getData = async () => {
    const storage = localStorage.getItem("featured");

    const isJson = (str) => {
      try {
        JSON.parse(str);
      } catch (e) {
        return false;
      }
      return true;
    };

    if (storage && isJson(storage)) {
      setFeatured(JSON.parse(storage));
    } else {
      const { data } = await axios.get(
        `https://api.spoonacular.com/recipes/random?number=12&apiKey=79943d6f4fdc475fb21b36f7b7a7d2bf`
      );
      localStorage.setItem("featured", JSON.stringify(data.recipes));
      setFeatured(data.recipes);
      console.log(data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <FeaturedWrapper>
        <h2>Featured Meals of the Week</h2>
        <Splide
          options={{
            perPage: 4,
            pagination: false,
            drag: "free",
            width: "100vw",
            gap: "40px",
            breakpoints: {
              1920: {
                perPage: 3,
              },
              1390: {
                perPage: 2,
              },
              900: {
                perPage: 1,
              },
            },
          }}
        >
          {featured.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <FeaturedCard>
                  <Link to={"/recipe/" + recipe.id}>
                    <p key={recipe.id}>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                  </Link>
                </FeaturedCard>
              </SplideSlide>
            );
          })}
        </Splide>
      </FeaturedWrapper>
    </>
  );
};

export default Featured;
