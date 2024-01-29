import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Search from "../Search";
import Categories from "../Categories";
import { Grid, SearchCard } from "../../Styling";
import "./SearchedResult.css";
import { useSelector, useDispatch } from "react-redux";
import { nextPage, prevPage } from "../../redux/actions";

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

  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    if (currentPage !== totalPages) setCurrentPage(currentPage + 1);
  };

  // const total = searchTerm.map(item => {
  //   console.log(item)
  // })


  return (
    <>
      <Categories />
      <Search />
      <select
        onChange={(e) => {
          setSearchTermPerPage(e.target.value);
        }}
      >
        <option value="12">12</option>
        <option value="24">24</option>
        <option value="48">48</option>
        <option value="">View All</option>
      </select>
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
            className={`${currentPage === page ? "chosenPage" : ""}`}
          >
            {page}
          </span>
        ))}
        <span onClick={prevPage}>Prev &lt; &lt; </span>
        <span onClick={nextPage}>Next &gt; &gt;</span>
      </p>
    </>
  );
};

export default SearchedResult;
