import React, { useState } from "react";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [input, setInput] = useState("");
  // const navigate = useNavigate("");

  const onInput = (e) => {
    e.preventDefault();
    setInput(e.target.value);
    // navigate("/search/" + input);
  };

  return (
    <>
      <form>
        <input
          onInput={onInput}
          type="text"
          placeholder="Enter here"
          value={input}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default Search;
