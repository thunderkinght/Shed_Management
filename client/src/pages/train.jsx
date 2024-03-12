import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';

const Train = () => {
  const location=useLocation();
  const [train, settrain] = useState({
    trainID: "",
    date: "",
    time:"",
    loco_no: "",
    self_dead: "",
    froms: "",
    tos: "",
    remark: "",
    work_done: "",
    supervisor: "",
  });

  const navigator = useNavigate();

  const handleChange = (e) => {
    settrain((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
        
      await axios.post("http://localhost:8800/newtrain", train);
      navigator("/",{state:{user:location.state.user}})
    } catch (err) {}
  };

  
  console.log(train);

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
            Train ID
          </Form.Label>
          <Col sm="10">
            <Form.Control
              onChange={handleChange}
              name="trainID"
              placeholder="Enter Train ID"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Date
          </Form.Label>
          <Col sm="10">
            <Form.Control
              onChange={handleChange}
              name="date"
              placeholder="Enter Date"
              type="date"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Time
          </Form.Label>
          <Col sm="10">
            <Form.Control
              onChange={handleChange}
              name="time"
              placeholder="Enter Time"
              type="time"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Locomotive No
          </Form.Label>
          <Col sm="10">
            <Form.Control
              onChange={handleChange}
              name="loco_no"
              placeholder="Enter Locomotive No"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Self or Dead
          </Form.Label>
          <Col sm="10">
          <Form.Select aria-label="Default select example" onChange={handleChange} name="self_dead">
            <option>Open this select menu</option>
            <option value="Self">Self</option>
            <option value="Dead">Dead</option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            From
          </Form.Label>
          <Col sm="10">
            <Form.Control
              onChange={handleChange}
              name="froms"
              placeholder="Enter the department from"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            To
          </Form.Label>
          <Col sm="10">
            <Form.Control
              onChange={handleChange}
              name="tos"
              placeholder="Enter the department to"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Remark
          </Form.Label>
          <Col sm="10">
            <Form.Control
              onChange={handleChange}
              name="remark"
              placeholder="Enter the Remark"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Work Compleletion
          </Form.Label>
          <Col sm="10">
            <Form.Control
              onChange={handleChange}
              name="work_done"
              placeholder="Enter the Work Time"
              type="date"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
          Supervisor
          </Form.Label>
          <Col sm="10">
            <Form.Control
              onChange={handleChange}
              name="supervisor"
              placeholder="Enter the Supervisor"
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

export default Train;
