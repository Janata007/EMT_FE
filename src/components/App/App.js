import "./App.css";

import { Component, useEffect, useState } from "react";
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
const [page, setPage] = useState(1);
  const loadEverything = async () => {
    const authors = await ELibraryService.fetchAuthors();
    const categories = await ELibraryService.fetchCategories();
    const books = await ELibraryService.bookPagination(page);
    console.log('foiwfewo')
    if (authors && categories && books)
      setBookState({
        categories: categories.data,
        authors: authors.data,
        books: { data: books.data.content, totalElements: books.data.totalElements},
      });
  };
  useEffect(() => {
    loadEverything();
  }, [page]);

  return (
    <Container>
      <Navbar />
      <Router>
        <Routes>
          <Route path={"/"} exact element={<Books books={bookState.books} authors={bookState.authors} categories={bookState.categories} />} />
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
            path={`/books`}
            exact
            element={<Books loadEverything={loadEverything} books={bookState.books} authors={bookState.authors} categories={bookState.categories} changePage={(currPage)=>setPage(currPage)} page={page} />}
          />
        </Routes>
      </Router>
    </Container>
  );
};

export default App;
