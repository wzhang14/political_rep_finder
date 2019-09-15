import React, { useState, useContext } from "react";
import RepContext from "../../context/rep/repContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
  const repContext = useContext(RepContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    if (text === "") {
      alertContext.setAlert("Please enter a postal code", "light");
    } else {
      repContext.searchReps(text);
      setText("");
    }
  };

  const onChange = e => {
    setText(e.target.value.trim().toUpperCase());
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Enter postal code to search representatives..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {repContext.representatives.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={repContext.clearReps}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
