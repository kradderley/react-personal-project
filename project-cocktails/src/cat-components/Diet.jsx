import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Categories from "../more-components/Categories";
import Search from "../more-components/Search";
import "../cat-components/Diet.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/splide/dist/css/splide.min.css";

const Diet = () => {
  const [diet, setDiet] = useState([]);
  let params = useParams();

  const getData = async (name) => {
    // const { data } = await axios.get(
    //   `https://api.spoonacular.com/recipes/complexSearch?number=12&diet=${name}&apiKey=e76065d309ed4dd6be48db38203bd2ca`
    // );
    // localStorage.setItem("diet", JSON.stringify(data.results));
    // setDiet(data.results);
    // console.log(data);

    // using the option below so that we do not use up all the API calls while working on the project
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
        `https://api.spoonacular.com/recipes/complexSearch?number=12&diet=${name}&apiKey=79943d6f4fdc475fb21b36f7b7a7d2bf`
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
        <Search />
        <Categories />
      </div>

      <Grid>
        {diet.map((item) => {
          return (
            <>
              <Link to={"/recipe/" + item.id}>
                <div className="all-meal-cards">
                  <div className="diet-list" key={item.id}>
                    <h4>{item.title}</h4>
                    <img src={item.image} alt={item.title} />
                  </div>
                </div>
              </Link>
            </>
          );
        })}
      </Grid>
    </>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
img {
  width: 100%, 
  border-radius: 2rem; 
}
a {
  text-decoration: none;
}

h4 {
  text-align: center; 
  padding: 1rem; 
}
`;

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
