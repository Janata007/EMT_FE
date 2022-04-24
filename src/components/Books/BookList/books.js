import React, { useState } from "react";
import "./Books.css";
import { Card } from "react-bootstrap";
import { Button, Row } from "react-bootstrap";
import EditModal from "../../Modal/Modal";

const Books = ({ books }) => {
    const [show, setShow] = useState(null);

  return (
    <Row>
      {books.map((term ) => {
        return (
          <Card style={{ width: "30%" }} key={term.name}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title>{term.name}</Card.Title>
              <Card.Title>{term.author}</Card.Title>
              <Card.Title>{term.category}</Card.Title>
              <Card.Title>{term.copies}</Card.Title>
              <div className="flex">
                <Button variant="primary" onClick={()=>setShow(term)}>Edit</Button>
                <Button variant="primary" onClick={()=>null}>Delete</Button>
                <Button variant="primary" onClick={()=>null}>Mark as taken</Button>
              </div>
            </Card.Body>
          </Card>
        );
      })}
      <EditModal show={show} handleClose={()=>setShow(null)} />
 </Row>
  );
};
export default Books;
