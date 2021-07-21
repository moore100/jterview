import React from "react";
import {Link, withRouter} from "react-router-dom";
  import { Nav,Navbar,Container} from 'react-bootstrap';
 
import { Alert,
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
   Col,
  Button,Breadcrumb, BreadcrumbItem } from "shards-react";

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import {Tagsli } from "../components";


function Navi(props){
	return(

<div className="navigation">

     <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Jiwe Interview-wahomemutahi</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/teams">Teams</Nav.Link>
       <Nav.Link href="/games">Games</Nav.Link>
        <Nav.Link href="/tags">Categories</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>



    </div>




		);
}
export default withRouter(Navi);