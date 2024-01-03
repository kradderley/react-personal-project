import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Search from "../Search";
import Categories from "../Categories";
import { Grid, SearchCard } from "../../Styling";

const SearchTerm = () => {
  const [searchTerm, setSearchTerm] = useState([]);
  let params = useParams();

  // const getSearchTerm = async (name) => {
  //   const { data } = await axios.get(
  //     `https://api.spoonacular.com/recipes/complexSearch?number=12&query=${name}&apiKey=e76065d309ed4dd6be48db38203bd2ca`
  //   );
  //   setSearchTerm(data.results);
  //   console.log(data);
  // };

  const getSearchTerm = async (name) => {
    const storage = localStorage.getItem("searchterm");

    const isJson = (str) => {
      try {
        JSON.parse(str);
      } catch (e) {
        return false;
      }
      return true;
    };

    if (storage && isJson(storage)) {
      setSearchTerm(JSON.parse(storage));
    } else {
      const { data } = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?number=12&query=${name}&apiKey=e76065d309ed4dd6be48db38203bd2ca`
      );
      localStorage.setItem("searchterm", JSON.stringify(data.results));
      setSearchTerm(data.results);
      console.log(data);
    }
  };

  useEffect(() => {
    getSearchTerm(params.keyword);
    console.log(params.keyword);
  }, [params.keyword]);

  return (
    <>
      <Categories />
      <Search />
      <Grid>
        {searchTerm.map((item) => {
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

export default SearchTerm;
