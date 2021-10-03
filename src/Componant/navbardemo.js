import React from 'react'
import Button from 'react-bootstrap/Button';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import logo from './logo512.png'; 
import { NavLink } from 'react-router-dom';


const Navbardemo = () => {
    return (
        <>
    <>
 
    <Navbar>
    <Container>
    <div>
      <h4>Webify Ritesh Tripathi</h4>
    </div>

      
  <>
  <NavLink to="/quizshala"><Button variant="primary">Quiz-Shala</Button>{' '}</NavLink>
  <NavLink to="/techblogs"><Button variant="secondary">Tech Blogs</Button>{' '}</NavLink>
  <NavLink to="/myproduct"><Button variant="success">My Products</Button>{' '}</NavLink>
  <NavLink to="/resource"><Button variant="warning">Resources</Button>{' '}</NavLink>
  <NavLink to="/tutorial"><Button variant="danger">ReactJS Tutorial</Button> {' '}</NavLink>
  <NavLink to="/login"><Button variant="light">Log IN</Button></NavLink>
  <NavLink to="/signupform"> <Button variant="light">Sign UP</Button> </NavLink>
  
</>
    </Container>
   
  </Navbar>
</>
    <>
 
  
</>
  
  
</>
    )
}

export default Navbardemo
