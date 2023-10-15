import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
      <Wrapper>
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
                  <Card>
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
                  </Card>
                </SplideSlide>
              </>
            );
          })}
        </Splide>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin: 50px 50px;
`;

const Card = styled.div`
  min-height: 25rem;
  min-width: 20rem; 
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute; 
    z-index: 100; 
    left: 50%
    bottom: 0%; 
    transform: translate (-50%, 0%); 
    background-color: black; 
    color: white; 
    font-weight: 600; 
    width: 100%; 
    text-align: center; 
    display: flex; 
    justify-content: center; 
    align-items: center; 
  }
`;

export default Dessert;
