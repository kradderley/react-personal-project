import React, { useState } from "react";
import styled from "styled-components";
import search from "../svg-components/search-icon.svg";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [input, setInput] = useState("");
  const nav = useNavigate();

  const onInput = (e) => {
    setInput(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    nav("/searched/" + input);
  };

  return (
    <>
      <Form onSubmit={onSubmit}>
        <div>
          {/* <img src={search} alt="search-magnifying-glass" /> */}
          <input
            type="text"
            value={input}
            onInput={onInput}
            placeholder="Enter name here"
          />
        </div>
      </Form>
    </>
  );
};

const Form = styled.form`
margin-top: 50px ; 
position; relative; 

div {
  width: 100%; 
  position: relative; 
  text-align: center; 
}

input {
  font-size: 1.5rem; 
  padding: 10px 50px ; 
  border-radius: 100rem; 
  width: 60%
}

// img {
//   position: absolute; 
//   top: 24%; 
//   left: 17.5%
// }

`;

export default Search;
