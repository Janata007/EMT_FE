import React from "react";
import "./Authors.css";
import { Card } from "react-bootstrap";
import { Button, Row } from "react-bootstrap";

const Authors = ({ authors }) =>{
    console.log(authors)
    return (
        <Row>
          {authors.map((term ) => {
            return (
              <Card style={{ width: "30%" }} key={term.name}>
                <Card.Body>
                  <Card.Title>{term.name}</Card.Title>
                  <Card.Title>{term.surname}</Card.Title>
                  <Card.Title>{term.country.name}</Card.Title>
                  <div className="flex">
                    {/* <Button variant="primary" onClick={()=>null}>Delete</Button> */}
                  </div>
                </Card.Body>
              </Card>
            );
          })}
     </Row>
      );
};
export default Authors;