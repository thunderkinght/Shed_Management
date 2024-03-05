import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "react-bootstrap/Navbar";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation, useNavigate } from "react-router-dom";

const Data = () => {
  const location=useLocation();
  const [users, setuser] = useState([]);

  const navigator=useNavigate();

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/data");
        setuser(res.data);
      } catch (err) {}
    };
    fetchAllBooks();
  });

  return (
    <div>
      <Navbar expand='xxl' bg="dark" data-bs-theme="dark">

        <Navbar.Brand>Hello</Navbar.Brand>
        
        <Navbar.Collapse className="justify-content-end">
          {location.state? <Navbar.Text>
            Signed in as: <a href="#login">{location.state.user.firstname} {location.state.user.lastname}</a>
          </Navbar.Text>: <div><Button onClick={()=>navigator("/login")} variant="primary">Login</Button><Button onClick={()=>navigator("/registor")} variant="primary">Registor</Button></div>}
          
        </Navbar.Collapse>

      </Navbar>
      <Container>
      <h1>Data</h1>
      <div className="Datas">
        <Table striped bordered hover size="sm">
        <thead>
          <th>#</th>
          <th>Username</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Password</th>
          </thead>
          <tbody>
          {users.map((user) => (
            <tr key={user.ID} >
              <td>{user.ID}</td>
              <td>{user.username}</td>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
            </tr>
          ))}
          </tbody>
        </Table>
      </div>
      </Container>
    </div>
  );
};

export default Data;
