import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Categories from "../more-components/Categories";
import "../cat-components/Diet.css";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/splide/dist/css/splide.min.css";

const Diet = () => {
  const [diet, setDiet] = useState([]);
  let params = useParams();

  const getData = async (name) => {
    const storage = localStorage.getItem("diet");

    const isJson = (str) => {
      try {
        JSON.parse(str);
      } catch (e) {
        return false;
      }
      return true;
    };

    if (storage && isJson(storage)) {
      setDiet(JSON.parse(storage));
    } else {
      const { data } = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?number=12&diet=${name}&apiKey=e76065d309ed4dd6be48db38203bd2ca`
      );
      localStorage.setItem("diet", JSON.stringify(data.results));
      setDiet(data.results);
      console.log(data);
    }
  };

  useEffect(() => {
    getData(params.type);
    console.log(params.type);
  }, [params.type]);

  return (
    <>
      <div>
        <Categories />
      </div>

      {diet.map((item) => {
        return (
          <>
            <div className="all-meal-cards">
              <div className="diet-list" key={item.id}>
                <h4>{item.title}</h4>
                <img src={item.image} alt={item.title} />
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Diet;

// const [diet, setDiet] = useState([]);
//   let params = useParams();

//   const getDiet = async (name) => {
//     const { data } = await axios.get(
//       `https://api.spoonacular.com/recipes/complexSearch?number=12&diet=${name}&apiKey=e76065d309ed4dd6be48db38203bd2ca`
//     );
//     setDiet(data.results);
//     console.log(data.results);
//   };

//   useEffect(() => {
//     getDiet(params.type);
//     console.log(params.type);
//   }, [params.type]);
