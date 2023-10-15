import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Search from "../more-components/Search";
import Categories from "../more-components/Categories";
import styled from "styled-components";

const SearchTerm = () => {
  const [searchTerm, setSearchTerm] = useState([]);
  let params = useParams();

  const getSearchTerm = async () => {
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
        `https://api.spoonacular.com/recipes/complexSearch?number=12&query=blueberry&apiKey=e76065d309ed4dd6be48db38203bd2ca`
      );
      localStorage.setItem("searchterm", JSON.stringify(data.results));
      setSearchTerm(data.results);
      console.log(data);
    }
  };

  useEffect(() => {
    getSearchTerm(params.search);
    console.log(params.search);
  }, [params.search]);

  return (
    <>
      <Search />
      <Categories />

      <Grid>
        {searchTerm.map((item) => {
          return (
            <>
              <div>
                <div key={item.id}>
                  <h4>{item.title}</h4>
                  <img src={item.image} alt={item.title} />
                </div>
              </div>
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

export default SearchTerm;
