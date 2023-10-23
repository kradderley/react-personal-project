import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Search from "../more-components/Search";
import Categories from "../more-components/Categories";

const Recipe = () => {
  let params = useParams();

  const [info, setInfo] = useState({});
  const [click, setClick] = useState("instructions");

  // const getInfo = async () => {
  //   const { data } = await axios.get(
  //     `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=79943d6f4fdc475fb21b36f7b7a7d2bf`
  //   );
  //   setInfo(data);
  //   console.log(data);
  // };

  // so the API key does not max out - make sure that all the api keys match
  const getInfo = async () => {
    const storage = localStorage.getItem("recipe");

    const isJson = (str) => {
      try {
        JSON.parse(str);
      } catch (e) {
        return false;
      }
      return true;
    };

    if (storage && isJson(storage)) {
      setInfo(JSON.parse(storage));
    } else {
      const { data } = await axios.get(
        `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=79943d6f4fdc475fb21b36f7b7a7d2bf`
      );
      localStorage.setItem("recipe", JSON.stringify(data));
      setInfo(data);
      console.log(data);
    }
  };

  useEffect(() => {
    getInfo();
    console.log(params.name);
  }, [params.name]);

  return (
    <>
      <Search />
      <Categories />
      <RecipeWrapper>
        <div>
          <h1>{info.title}</h1>
          <img src={info.image} />
          <p dangerouslySetInnerHTML={{ __html: info.summary }}></p>
          <p>Cook Time: {info.readyInMinutes} mins</p>
          <p>Serving Size: {info.servings} </p>
        </div>

        <Info>
          <Button
            className={click === "instructions" ? "clicked" : ""}
            onClick={() => setClick("instructions")}
          >
            Instructions
          </Button>
          <Button
            className={click === "ingredients" ? "clicked" : ""}
            onClick={() => setClick("ingredients")}
          >
            Ingredients
          </Button>
          {click === "instructions" && (
            <div>
              <p dangerouslySetInnerHTML={{ __html: info.instructions }}></p>
            </div>
          )}

          {click === "ingredients" && (
            <ul>
              {info.extendedIngredients?.map((item) => (
                <li key={item.is}> {item.original}</li>
              ))}
            </ul>
          )}
        </Info>
      </RecipeWrapper>
    </>
  );
};

const RecipeWrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 50px;
  margin-left: 50px;
  margin-right: 50px;
  display: flex;

  .clicked {
    background-color: black;
    color: white;
  }

  h1 {
    margin-bottom: 30px;
  }

  div {
    margin-right: 75px;
  }
`;

const Button = styled.button`
  padding: 30px 70px;
  margin-bottom: 50px;
  margin-top: 50px;
  margin-left: 50px;
  background: white;
  color: black;
  border: 2px solid black;
  font-size: 17.5px;
  border-radius: 20px;
`;

const Info = styled.div`
  margin-left: 40px;

  p {
    font-size: 20px;
  }
`;

export default Recipe;
