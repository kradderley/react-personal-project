import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Search from "../Search";
import Categories from "../Categories";
import { Grid, SearchCard } from "../../Styling";
import "./SearchedResult.css";

const SearchedResult = () => {
  const [searchTerm, setSearchTerm] = useState([]);
  const [searchTermsPerPage, setSearchTermPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);

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
        `https://api.spoonacular.com/recipes/complexSearch?number=100&query=${name}&apiKey=79943d6f4fdc475fb21b36f7b7a7d2bf`
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

  const totalPages = Math.ceil(searchTerm.length / searchTermsPerPage);
  const pages = [...Array(totalPages + 1).keys()].slice(1);

  const lastIndex = currentPage * searchTermsPerPage;
  const firstIndex = lastIndex - searchTermsPerPage;

  const shownSearches = searchTerm.slice(firstIndex, lastIndex);

  return (
    <>
      <Categories />
      <Search />
      <Grid>
        {shownSearches.map((item) => {
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
      <p className="pagination">
        {pages.map((page) => (
          <span
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`${currentPage === page ? "active" : ""}`}
          >
            {page}
          </span>
        ))}
        <span>Prev &lt; &lt; </span>
        <span>Next &gt; &gt;</span>
      </p>
    </>
  );
};

export default SearchedResult;
