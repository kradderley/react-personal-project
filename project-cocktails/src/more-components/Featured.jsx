import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "../more-components/Featured.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import styled from "styled-components";

const Featured = () => {
  const [featured, setFeatured] = useState([]);

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
        `https://api.spoonacular.com/recipes/random?number=10&apiKey=79943d6f4fdc475fb21b36f7b7a7d2bf`
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
      <Wrapper>
        <h2>Featured Meals of the Day</h2>
        <Splide
          options={{
            perPage: 3,
            pagination: false,
            drag: "free",
            gap: "100px",
          }}
        >
          {featured.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <p className="featured-title" key={recipe.id}>
                    {recipe.title}
                  </p>
                  <img
                    className="featured-image"
                    src={recipe.image}
                    alt={recipe.title}
                  />
                </Card>
              </SplideSlide>
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

export default Featured;
