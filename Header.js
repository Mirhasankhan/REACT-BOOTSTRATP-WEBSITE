import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

const Header = () => {
  return (
    <Jumbotron>
      <h1>Breaking News!!</h1>
      <p>This is something else. I don't why this is not working 
        at the moment. Maybe they removed it from react bootstrap</p>
      <Button variant="primary">Learn More</Button> 
    </Jumbotron>
  );
};

export default Header;