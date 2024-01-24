import React, { useState } from "react";
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
          <input
            type="text"
            value={input}
            onInput={onInput}
            placeholder="ex. Butter, eggs, cereal etc."
          />
        </div>
      </Form>
    </>
  );
};

export default Search;
