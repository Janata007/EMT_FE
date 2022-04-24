import "./App.css";

import { Component, useEffect, useState } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import ELibraryService from "../../repository/elibraryRepository";
import Authors from "../Authors/authors";
import Books from "../Books/BookList/books";
import Categories from "../Categories/categories";
import Navbar from "../Nav/Navbar";

const App = () => {
  const [bookState, setBookState] = useState({
    authors: [],
    categories: [],
    books: [],
  });

  const loadAuthors = () => {
    ELibraryService.fetchAuthors().then((data) => {
      setBookState({
        ...bookState,
        authors: data.data,
      });
    });
  };
  const loadCategories = () => {
    ELibraryService.fetchCategories().then((data) => {
      setBookState({
        ...bookState,

        categories: data.data,
      });
    });
  };
  const loadBooks = () => {
    ELibraryService.fetchBooks().then((data) => {
      setBookState({
        // books: data.data,
        books: [
          {
            name: "nesto",
            category: "aaa",
            author: "big oigngeonre",
            copies: 123,
            id: 1,
          },
          {
            name: "nesto",
            category: "aaa",
            author: "big oigngeonre",
            copies: 123,
            id: 1,
          },
          {
            name: "nesto",
            category: "aaa",
            author: "big oigngeonre",
            copies: 123,
            id: 1,
          },
        ],
      });
    });
  };
  useEffect(() => {
    loadAuthors();
    loadCategories();
    loadBooks();
  }, []);
  return (
    <Container>
      <Navbar />
      <Router>
        <Routes>
          <Route path={"/"} exact element={<Books books={bookState.books} />} />
          <Route
            path={"/authors"}
            exact
            element={<Authors authors={bookState.authors} />}
          />
          <Route
            path={"/categories"}
            exact
            element={<Categories categories={bookState.categories} />}
          />
          <Route
            path={"/books"}
            exact
            element={<Books books={bookState.books} />}
          />
        </Routes>
      </Router>
    </Container>
  );
};

export default App;
