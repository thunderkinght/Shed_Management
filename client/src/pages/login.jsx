import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";

const Login = () => {
  const [user, setuser] = useState({
    email: "",
    password: "",
  });

  

  //   const [getusers, getuser] = useState([]);

  const navigator = useNavigate();

  const handleChange = (e) => {
    setuser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8800/login/" + user.email);
      console.log(res.data[0].password);

      if (res.data[0].password === user.password) {
        console.log("Correct password");

        navigator("/", { state: { user: res.data[0] } });
      } else {
        console.log("Wrong password");
      }
    } catch (err) {}
  };

  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Header>Login</Card.Header>
            <Card.Body>
              <Form>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextEmail"
                >
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
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextPassword"
                >
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

export default Login;
