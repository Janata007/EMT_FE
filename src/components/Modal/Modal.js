import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import ELibraryService from "../../repository/elibraryRepository";

const EditModal = ({ show, handleClose }) => {
  const [formValues, setFormValues] = useState({});
  const changeValue = (element) => {
    console.log(element.target);
    setFormValues({
      ...formValues,
      [element.target.id]: element.target.value,
    });
  };

  return (
    <Modal show={Boolean(show)} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Book</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              defaultValue={show && show.name}
              placeholder="Enter name"
              onChange={(e) => changeValue(e)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="category">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              defaultValue={show && show.category}
              placeholder="Enter Category"
              onChange={(e) => changeValue(e)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="author">
            <Form.Label>Author</Form.Label>
            <Form.Control
              type="text"
              defaultValue={show && show.author}
              placeholder="Enter Author"
              onChange={(e) => changeValue(e)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="copies">
            <Form.Label>Copies</Form.Label>
            <Form.Control
              type="text"
              defaultValue={show && show.copies}
              placeholder="Enter Copies"
              onChange={(e) => changeValue(e)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button
          variant="primary"
          onClick={() => ELibraryService.editBook(show, formValues)}
        >
          Save changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditModal;
