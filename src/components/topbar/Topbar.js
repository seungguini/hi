import React from "react";
import "./topbar.scss";

//import HamburgerMenu from "../hamburger-menu/HamburgerMenu";
//import { Mail, Person, Phone } from "@material-ui/icons";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Topbar() {
  return (
    <Navbar bg="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand className="brand-name navText" href="#home">
          Seunggun
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-white">
            <Nav.Link className="navText" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="navText" href="#workexperience">
              Work Experience
            </Nav.Link>
            <Nav.Link className="navText" href="#projects">
              Projects
            </Nav.Link>
            <Nav.Link className="navText" href="#contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
{
  /* <Navbar bg="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#intro"></Navbar.Brand>
        <Navbar.Text>Hello World</Navbar.Text>
      </Container>
    </Navbar> */
}
// <div className="topbar">

//     <div className="wrapper">
//         <div className="left">
//             <a href="#intro" className="logo" >Seunggun.</a>
//             <div className="itemContainer">
//                 <Phone/>
//                 <span>(646) 300 - 1532</span>
//             </div>
//             <div className="itemContainer">
//                 <Mail/>
//                 <span>seunggun.lee@nyu.edu</span>
//             </div>
//         </div>
//         <div className="right">
//             <HamburgerMenu />
//         </div>
//     </div>
// </div>
