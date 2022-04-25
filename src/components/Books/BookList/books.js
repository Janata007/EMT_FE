import React, { useState } from "react";
import "./Books.css";
import { Card } from "react-bootstrap";
import { Button, Row } from "react-bootstrap";
import EditModal from "../../Modal/Modal";
import ELibraryService from "../../../repository/elibraryRepository";

const Books = ({
  books,
  authors,
  categories,
  changePage,
  page,
  loadEverything,
}) => {
  const [show, setShow] = useState(null);
  const [addBook, setAddBook] = useState(null);
  console.log(books);
  return (
    <>
      <Row>
        <Button variant="success" onClick={() => setAddBook(true)}>
          Add new book
        </Button>
      </Row>
      <Row>
        {books?.data?.map((term) => {
          return (
            <Card style={{ width: "30%" }} key={term.name}>
              {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
              <Card.Body>
                <Card.Title>{term.name}</Card.Title>
                <Card.Title>{term.author.name}</Card.Title>
                <Card.Title>{term.category}</Card.Title>
                <Card.Title>{term.copies}</Card.Title>
                <div className="flex">
                  <Button variant="primary" onClick={() => setShow(term)}>
                    Edit
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => {
                      loadEverything();
                      ELibraryService.deleteBook(term.id);
                    }}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => {
                      loadEverything();
                      ELibraryService.markAsTaken(term.id);
                    }}
                  >
                    Mark as taken
                  </Button>
                </div>
              </Card.Body>
            </Card>
          );
        })}
        <Row>
          <Button
            variant="primary"
            disabled={page <= 1}
            onClick={() => changePage(page - 1)}
          >
            Previous Page
          </Button>
          <Button
            variant="primary"
            disabled={page > books.totalElements / 5}
            onClick={() => changePage(page + 1)}
          >
            Next Page
          </Button>
        </Row>
        <EditModal
          show={show}
          authors={authors}
          categories={categories}
          handleClose={() => setShow(null)}
          loadEverything={
            loadEverything
          }
        />
        <EditModal
          show={addBook}
          variant="create"
          categories={categories}
          authors={authors}
          loadEverything={
            loadEverything
          }
          handleClose={() => setAddBook(null)}
        />
      </Row>
    </>
  );
};
export default Books;
