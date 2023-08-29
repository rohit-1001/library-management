import React, { useState, useContext, useEffect, useReducer } from "react";
import { useCallback } from "react";
const URL = "http://openlibrary.org/search.json?";
const AppContext = React.createContext();

const initialState = { searchByURL: URL };

function reducer(state, action) {
  switch (action.type) {
    case "byTitle":
      return { searchByURL: `${URL}title=` };
    case "byAuthor":
      return { searchByURL: `${URL}author=` };
    case "bySubject":
      return { searchByURL: `${URL}subject=` };
    default:
      return { searchByURL: `${URL}title=` };
  }
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [searchTerm, setSearchTerm] = useState("Let the Magic happen");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultTitle, setResultTitle] = useState("");

  const fetchBooks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${state.searchByURL}${searchTerm}&sort=new`
      );
      const data = await response.json();
      const { docs } = data;

      if (docs) {
        const newBooks = docs.slice(0, 20).map((bookSingle) => {
          const {
            key,
            author_name,
            cover_i,
            edition_count,
            first_publish_year,
            title,
            // ratings_average,
            // subject_facet
          } = bookSingle;

          return {
            id: key,
            author: author_name,
            cover_id: cover_i,
            edition_count: edition_count,
            first_publish_year: first_publish_year,
            title: title,
            // ratings_average : ratings_average,
            // genre: subject_facet ? subject_facet.join(", ") : "No subjects found"
          };
        });

        setBooks(newBooks);

        if (newBooks.length > 1) {
          setResultTitle("Your Search Result");
        } else {
          setResultTitle("No Search Result Found!");
        }
      } else {
        setBooks([]);
        setResultTitle("No Search Result Found!");
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchBooks();
  }, [searchTerm, fetchBooks]);

  return (
    <AppContext.Provider
      value={{
        loading,
        books,
        setSearchTerm,
        resultTitle,
        setResultTitle,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
