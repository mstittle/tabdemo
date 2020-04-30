import React, { useState } from 'react';
import { Tab, Tabs, Container, Row, Col, Button, Form } from 'react-bootstrap';

import logo from './logo.svg';
import './App.css';

function Sonnet() {
  return (<div>
    Lo! in the orient when the gracious light Lifts up his burning head, each under eye Doth homage to his new-appearing sight, Serving with looks his sacred majesty; And having climb'd the steep-up heavenly hill, Resembling strong youth in his middle age, Yet mortal looks adore his beauty still, Attending on his golden pilgrimage: But when from highmost pitch, with weary car, Like feeble age, he reeleth from the day,
    Lo! in the orient when the gracious light Lifts up his burning head, each under eye Doth homage to his new-appearing sight, Serving with looks his sacred majesty; And having climb'd the steep-up heavenly hill, Resembling strong youth in his middle age, Yet mortal looks adore his beauty still, Attending on his golden pilgrimage: But when from highmost pitch, with weary car, Like feeble age, he reeleth from the day,
    Lo! in the orient when the gracious light Lifts up his burning head, each under eye Doth homage to his new-appearing sight, Serving with looks his sacred majesty; And having climb'd the steep-up heavenly hill, Resembling strong youth in his middle age, Yet mortal looks adore his beauty still, Attending on his golden pilgrimage: But when from highmost pitch, with weary car, Like feeble age, he reeleth from the day,
    Lo! in the orient when the gracious light Lifts up his burning head, each under eye Doth homage to his new-appearing sight, Serving with looks his sacred majesty; And having climb'd the steep-up heavenly hill, Resembling strong youth in his middle age, Yet mortal looks adore his beauty still, Attending on his golden pilgrimage: But when from highmost pitch, with weary car, Like feeble age, he reeleth from the day,
    Lo! in the orient when the gracious light Lifts up his burning head, each under eye Doth homage to his new-appearing sight, Serving with looks his sacred majesty; And having climb'd the steep-up heavenly hill, Resembling strong youth in his middle age, Yet mortal looks adore his beauty still, Attending on his golden pilgrimage: But when from highmost pitch, with weary car, Like feeble age, he reeleth from the day,
  </div>);
}
function ControlledTabs() {
  const [key, setKey] = useState('home');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
    >
      <Tab eventKey="home" title="0130:CTX">
        <Sonnet />
      </Tab>
      <Tab eventKey="profile" title="0070:XYZ">
        <Sonnet />
      </Tab>

    </Tabs>
  );
}

function MyForm() {
  return (
    <Form>
  <Row>
    <Col>
      <Form.Control placeholder="Region" />
    </Col>
    <Col>
      <Form.Control placeholder="Cmp Code" />
    </Col>
    <Col><Button variant="primary">New Call</Button>{' '}</Col>

  </Row>
</Form>
  )
}

function App() {
  return (
    <Container fluid>
      <Row>
        <Col><MyForm /></Col>
      </Row>
      <Row>
        <Col><ControlledTabs /></Col>
      </Row>

    </Container>
    );
}

export default App;
