import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Body = ({el}) => {
    return (
      <div>
        <h1>WELCOME TO THE SITE </h1>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{}</Card.Title>
              <Card.Text>
               {}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
      </div>
      );
}

export default Body