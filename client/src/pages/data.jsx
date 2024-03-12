import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "react-bootstrap/Navbar";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation, useNavigate } from "react-router-dom";
// import { CookiesProvider, useCookies } from 'react-cookie'

const Data = () => {
  const location=useLocation();
  const [users, setuser] = useState([]);
  const [trains,settrain]=useState([]);
  // const [cookies, setCookie] = useCookies(['user'])
  const navigator=useNavigate();

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        if(location.state!=null && location.state.user.role==="admin"){
          const res = await axios.get("http://localhost:8800/data");
          setuser(res.data);
        }
        const res1=await axios.get("http://localhost:8800/train");
        settrain(res1.data);
      } catch (err) {}
    };
    fetchAllBooks();
  });

  const handledeleteuser=async(id)=>{
    try{
      await axios.delete("http://localhost:8800/user/"+id)
      window.location.reload();
    }
    catch(err){

    }
  };

  const handledeletetrain=async(id)=>{
    try{
      await axios.delete("http://localhost:8800/train/"+id)
      window.location.reload();
    }
    catch(err){

    }
  };

  return (
    <div>
      <Navbar expand='xxl' bg="dark" data-bs-theme="dark">

        <Navbar.Brand>Hello</Navbar.Brand>
        
        <Navbar.Collapse className="justify-content-end">
          {location.state? 
          <Navbar.Text>
            Signed in as: <a href="#login">{location.state.user.firstname} {location.state.user.lastname}</a>
          </Navbar.Text>
          : 
          <div>
            <Button onClick={()=>navigator("/login")} variant="primary">Login</Button>
          </div>}
          
        </Navbar.Collapse>

      </Navbar>
      <Container>
      {
        location.state && location.state.user.role==='admin'?
        <div className="Datas">
          <h1>Username Data</h1>
        <Table striped bordered hover size="sm">
        <thead>
          <th>#</th>
          <th>Username</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Role</th>
          </thead>
          <tbody>
          {users.map((user) => (
            <tr key={user.empID} >
              <td>{user.empID}</td>
              <td>{user.username}</td>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.role}</td>
              {location.state && location.state.user.role==='admin'? <td><Button onClick={()=>handledeleteuser(user.empID)}>Delete</Button></td>:<div></div>}
            </tr>
          ))}
          </tbody>
        </Table>
      </div>
      :
      <div></div>
      }
      <h1>Train Data</h1>
      <Table striped bordered hover size="sm">
        <thead>
          <th>#</th>
          <th>Date</th>
          <th>Time</th>
          <th>Loco No</th>
          <th>Self or Dead</th>
          <th>Supervisor</th>
          <th>From</th>
          <th>To</th>
          <th>Remark</th>
          <th>Work Done</th>
          </thead>
          <tbody>
          {trains.map((train) => (
            <tr key={train.trainID} >
              <td>{train.trainID}</td>
              <td>{train.date}</td>
              <td>{train.time}</td>
              <td>{train.loco_no}</td>
              <td>{train.self_dead}</td>
              <td>{train.supervisor}</td>
              <td>{train.froms}</td>
              <td>{train.tos}</td>
              <td>{train.remark}</td>
              <td>{train.work_done? train.work_done: "Not Done"}</td>
              {location.state && (location.state.user.role==='admin' || location.state.user.role==='supervisior')? <td><Button onClick={()=>handledeletetrain(train.trainID)}>Delete</Button></td>:<div></div>}
            </tr>
          ))}
          </tbody>
        </Table>

        {
        location.state && location.state.user.role==='admin'?
        <Button onClick={()=>navigator("/registor",{state:{user:location.state.user}})} variant="primary">Add user</Button>:
        <div></div>
        }
        {
        location.state && (location.state.user.role==='admin' || location.state.user.role==='supervisior')?
        <Button onClick={()=>navigator("/newtrain",{state:{user:location.state.user}})} variant="primary">Add train</Button>:
        <div></div>
        }
        
      </Container>
    </div>
  );
};

export default Data;
