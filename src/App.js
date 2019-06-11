import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import obrazek from'./assets/images/drzewo.jpg'
import {Item} from './components/Item'

function App() {

const myData = {
  src: obrazek,
  title: 'Drezwo',
  description: 'Drzewo, drzewo, drzewo, drzewo, drzewo, drzewo, drzewo, drzewo, drzewo, drzewo, drzewo, drzewo.'
}

  return (
 <>
 <Container>
    <Row>
      <Col xs={12} md={5}>
        <Item info={myData}/>
      </Col>
      <Col  xs={12} md={5}>
      <Item info={myData}/>
      </Col>        
    </Row>
 </Container>
 </>
 );
}

export default App;
