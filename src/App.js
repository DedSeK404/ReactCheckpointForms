import './App.css';
import { Button, Form, Row, Col, Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BasicExample, TextControlsExample, InputSizesExample, FormFileExample, FormControlDisabledExample} from './elforms'

function App() {
  return (
    <div className="App">
      <header>
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
      </header>
      <main>
     {/* Grid   */}
    <Container>
      <Row>
        <Col><BasicExample/></Col>
        <Col><TextControlsExample/></Col>
      </Row>
      <Row>
        <Col><InputSizesExample/></Col>
        <Col><FormFileExample/></Col>
        <Col><FormControlDisabledExample/></Col>
      </Row>
    </Container>
      </main>
    </div>
  );
}

export default App;
