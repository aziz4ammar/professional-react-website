import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./body.css"
const Body = ({el}) => {
    return (
            <Card className='card' style={{ width: '18rem' }}>
              <Card.Img variant="top" src={el.image} />
              <Card.Body>
                <Card.Title>{el.name}</Card.Title>
                <Card.Text>
                 {el.text}
                </Card.Text>
                <Button className='btn' variant="primary">Learn more</Button>
                <Button id='but' className='btn' variant="primary">Add to cart</Button>
              </Card.Body>
            </Card>
            
      );
}

export default Body