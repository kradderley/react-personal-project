import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Recipe = () => {
  let params = useParams();

  const [info, setInfo] = useState({});

  const getInfo = async () => {
    const { data } = await axios.get(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=e76065d309ed4dd6be48db38203bd2ca`
    );
    setInfo(data);
    console.log(data);
  };

  useEffect(() => {
    getInfo();
    console.log(params.name);
  }, [params.name]);

  return (
    <>
      <div>
        <h1>{info.title}</h1>
        <img src={info.image} />
        <div>
          <span>{info.readyInMinutes} mins</span>
          <span>{info.servings}</span>
        </div>
        <p>{info.summary}</p>
        <p>{info.instructions}</p>
      </div>
    </>
  );
};

export default Recipe;
