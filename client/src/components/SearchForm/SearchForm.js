import React, { useRef, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context.js";
import "./SearchForm.css";

const SearchForm = () => {
  const { setSearchTerm, setResultTitle, dispatch } = useGlobalContext();
  const [selectedOption, setSelectedOption] = useState('byTitle');
  const searchText = useRef("");
  const navigate = useNavigate();

  const handleOptionChange = (event) => {
    const selectedType = event.target.value;
    setSelectedOption(selectedType);
    dispatch({ type: selectedType });
  };

  useEffect(() => searchText.current.focus(), []);
  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if (tempSearchTerm.replace(/[^\w\s]/gi, "").length === 0) {
      setSearchTerm("Let the Magic Happen");
      setResultTitle("Please Enter Something ...");
    } else {
      setSearchTerm(searchText.current.value);
    }

    navigate("/book");
  };

  return (
    <div className="search-form">
      <div className="container">
        <div className="search-form-content">
          <div className="button-group">
            <label
              className={`styled-radio ${
                selectedOption === "byTitle" ? "active" : ""
              }`}
            >
              <input
                type="radio"
                value="byTitle"
                checked={selectedOption === "byTitle"}
                onChange={handleOptionChange}
              />
              Title
            </label>
            <label
              className={`styled-radio ${
                selectedOption === "byAuthor" ? "active" : ""
              }`}
            >
              <input
                type="radio"
                value="byAuthor"
                checked={selectedOption === "byAuthor"}
                onChange={handleOptionChange}
              />
              Author
            </label>
            <label
              className={`styled-radio ${
                selectedOption === "bySubject" ? "active" : ""
              }`}
            >
              <input
                type="radio"
                value="bySubject"
                checked={selectedOption === "bySubject"}
                onChange={handleOptionChange}
              />
              Subject
            </label>
          </div>
          <form className="search-form" onSubmit={handleSubmit}>
            <div className="search-form-elem flex flex-sb bg-white">
              <input
                type="text"
                className="form-control"
                placeholder="Let the Magic Happen..."
                ref={searchText}
              />
              <button
                type="submit"
                className="flex flex-c"
                onClick={handleSubmit}
              >
                <FaSearch className="text-purple" size={32} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
