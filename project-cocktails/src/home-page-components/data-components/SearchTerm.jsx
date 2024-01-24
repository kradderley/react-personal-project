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
  //     `https://api.spoonacular.com/recipes/complexSearch?number=12&query=${name}&apiKey=${process.env.REACT_APP_API_KEY_ONE}`
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
        `https://api.spoonacular.com/recipes/complexSearch?number=12&query=${name}&apiKey=79943d6f4fdc475fb21b36f7b7a7d2bf`
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
