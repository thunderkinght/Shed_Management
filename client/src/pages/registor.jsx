import axios from "axios";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';
import { useLocation, useNavigate } from "react-router-dom";

const Registor = () => {

  const location=useLocation();
  const [user, setuser] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    role:""
  });

  const navigator = useNavigate();

  const handleChange = (e) => {
    setuser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/registor", user);
      navigator("/",{state:{user:location.state.user}})
    } catch (err) {}
  };

  console.log(user);

  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Header>Login</Card.Header>
            <Card.Body>
              <Form>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            First Name
          </Form.Label>
          <Col sm="10">
            <Form.Control
              onChange={handleChange}
              name="firstname"
              placeholder="Enter First Name"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Last Name
          </Form.Label>
          <Col sm="10">
            <Form.Control
              onChange={handleChange}
              name="lastname"
              placeholder="Enter Last Name"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Username
          </Form.Label>
          <Col sm="10">
            <Form.Control
              onChange={handleChange}
              name="username"
              placeholder="Enter Username"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Self or Dead
          </Form.Label>
          <Col sm="10">
          <Form.Select aria-label="Default select example" onChange={handleChange} name="role">
            <option>Open this select menu</option>
            <option value="admin">Admin</option>
            <option value="supervisior">Supervisior</option>
            <option value="worker">Worker</option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control
              onChange={handleChange}
              name="email"
              placeholder="Enter Email"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="10">
            <Form.Control
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Enter Password"
            />
          </Col>
        </Form.Group>

        <Button onClick={handleClick} variant="primary" type="submit">
          Submit
        </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Registor;
