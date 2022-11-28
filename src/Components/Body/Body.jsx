import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ar from "../img/aqq.jpg";
import "./body.css"
const Body = ({el}) => {
    return (
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={ar} />
              <Card.Body>
                <Card.Title>{el.name}</Card.Title>
                <Card.Text>
                 {el.text}
                </Card.Text>
                <Button className='btn' variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            
      );
}

export default Body