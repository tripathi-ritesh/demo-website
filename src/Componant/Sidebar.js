import React from "react";
import { CDBContainer, CDBSidebar, CDBSidebarContent, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem, CDBSidebarFooter } from "cdbreact";
import { NavLink } from "react-router-dom";
import Button from "@restart/ui/esm/Button";
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import logo from './logo512.png'; 
const Sidebar = () => {

    return (
         <>
<div class="vertical-nav bg-red" id="sidebar">
<Container>
      <Navbar.Brand href="#">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      <NavLink to="/"><label >Webify-Tech</label></NavLink>
      </Navbar.Brand>
      </Container>

  <p class="text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0">Dashboard</p>

  <ul class="nav flex-column bg-red mb-0">
    <li class="nav-item">
      <a href="#" class="nav-link text-dark bg-dark">
                <i class="fa fa-th-large mr-3 text-primary fa-fw"></i>
               <NavLink to='/course1'> Quiz-Shala</NavLink>
            </a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link text-dark">
                <i class="fa fa-address-card mr-3 text-primary fa-fw"></i>
                <NavLink to='/course2'> Course 2 </NavLink>
            </a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link text-dark">
                <i class="fa fa-cubes mr-3 text-primary fa-fw"></i>
                <NavLink to='/course3'> Course 3 </NavLink>
            </a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link text-dark">
                <i class="fa fa-picture-o mr-3 text-primary fa-fw"></i>
                <NavLink to='/course4'> Course 4 </NavLink>
            </a>
    </li>
  </ul>

  <p class="text-gray font-weight-bold text-uppercase px-3 small py-4 mb-0">Charts</p>

  <ul class="nav flex-column bg-red mb-0">
    <li class="nav-item">
      <a href="#" class="nav-link text-dark bg-dark">
                <i class="fa fa-th-large mr-3 text-primary fa-fw"></i>
               <NavLink to='/course1'> Quiz-Shala</NavLink>
            </a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link text-dark">
                <i class="fa fa-address-card mr-3 text-primary fa-fw"></i>
                <NavLink to='/course2'> Course 2 </NavLink>
            </a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link text-dark">
                <i class="fa fa-cubes mr-3 text-primary fa-fw"></i>
                <NavLink to='/course3'> Course 3 </NavLink>
            </a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link text-dark">
                <i class="fa fa-picture-o mr-3 text-primary fa-fw"></i>
                <NavLink to='/course4'> Course 4 </NavLink>
            </a>
    </li>
  </ul>
</div>

         </>
    );
};

export default  Sidebar;
