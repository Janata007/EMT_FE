import React from "react";
import { Card } from "react-bootstrap";
import { Button, Row } from "react-bootstrap";

const categories = ({ categories }) =>{
    return (
        <Row>
          {categories.map((term ) => {
            return (
              <Card style={{ width: "30%" }} key={term}>
                <Card.Body>
                  <Card.Title>{term}</Card.Title>
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
export default categories;