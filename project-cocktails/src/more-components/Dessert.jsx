import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { DessertWrapper, DessertCard } from "../Styling";

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
        `https://api.spoonacular.com/recipes/random?number=12&tags=dessert&apiKey=79943d6f4fdc475fb21b36f7b7a7d2bf`
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
      <DessertWrapper>
        <h2>Recommended Desserts of the Week</h2>
        <Splide
          options={{
            perPage: 4,
            pagination: false,
            drag: "free",
            width: '100vw', 
            gap: "30px",
            breakpoints: {
              1920: {
                perPage: 3,
              },
              1390: {
                perPage: 2,
              },
              1050: {
                perPage: 1,
              },
            },
          }}
        >
          {dessert.map((recipe) => {
            return (
              <>
                <SplideSlide key={recipe.id}>
                  <DessertCard>
                    <Link to={"/recipe/" + recipe.id}>
                    <p className="featured-title" key={recipe.id}>
                      {recipe.title}
                    </p>
                    <img
                      className="featured-image"
                      src={recipe.image}
                      alt={recipe.title}
                    />
                    </Link>
                  </DessertCard>
                </SplideSlide>
              </>
            );
          })}
        </Splide>
      </DessertWrapper>
    </>
  );
};



export default Dessert;
