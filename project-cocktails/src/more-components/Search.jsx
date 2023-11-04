import React, { useState } from "react";
// import styled from "styled-components";
// import search from "../svg-components/search-icon.svg";
import { useNavigate } from "react-router-dom";
import { Form } from "../Styling";

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

export default Search;
