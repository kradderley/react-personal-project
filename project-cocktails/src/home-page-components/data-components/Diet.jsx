import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Categories from "../Categories";
import Search from "../Search";
import { Grid, SearchCard } from "../../Styling";
import { Link } from "react-router-dom";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/splide/dist/css/splide.min.css";

const Diet = () => {
  const [diet, setDiet] = useState([]);
  let params = useParams();

  // const getData = async (name) => {
  //     const { data } = await axios.get(
  //       `https://api.spoonacular.com/recipes/complexSearch?number=100&diet=${name}&apiKey=${process.env.REACT_APP_API_KEY_ONE}`
  //     );
  //     localStorage.setItem("diet", JSON.stringify(data.results));
  //     setDiet(data.results);
  //     console.log(data) };

 
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
        `https://api.spoonacular.com/recipes/complexSearch?number=100&diet=${name}&apiKey=79943d6f4fdc475fb21b36f7b7a7d2bf`
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
        <Search />
      </div>

      <Grid>
        {diet.map((item) => {
          return (
            <>
              <Link to={"/recipe/" + item.id}>
                <SearchCard>
                  <div key={item.id}>
                    <h3>{item.title}</h3>

                    <img src={item.image} alt={item.title} />
                  </div>
                </SearchCard>
              </Link>
            </>
          );
        })}
      </Grid>
    </>
  );
};

export default Diet;
