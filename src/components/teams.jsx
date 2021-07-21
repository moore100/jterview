import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Alert,
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
   Container, Col,
  Button,Breadcrumb, BreadcrumbItem } from "shards-react";
import { Nav,Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import  { GameList,Navi } from "../components";
import Spinner from 'react-bootstrap/Spinner';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

const client = new ApolloClient({
  uri: 'https://jiwe-demo.herokuapp.com/v1/graphql',
 headers: {"content-Type": "application/json",
'x-hasura-admin-secret': 'jiwe-interview'},
});


const TeamLists =() =>{
  const TEAMS_QUERY = gql`
{
  users {
    id
    name
    bio
    avatar
  }
}
`;

  const{ loading,error,data } = useQuery(TEAMS_QUERY);
  if(loading) return<div className="row pt-5 pl-5 justify-content-center"> <Spinner animation="grow" size="sm" />
  <Spinner animation="grow" /></div>;


  return   <div class="pl-2 pt-3">
  <Row className="justify-content-center">
  <h2 className="font-weight-bold border-rght text-center">The Team</h2>
  <div className="border-bottom"></div>
</Row>
<Image style={{width:"100%", height:"250px"}} src="https://jiwe.io/static/media/logo-black.6ae66a8c.png" fluid rounded />
  <div className="border-bottom"></div>

<div className="row">
    {data.users.map(({id,name,bio,avatar}) => <div className="col-md-3 col-12 col-sm-12">
  <div className="pb-2 pr-2 pl-2">
  
  <div className="card"  style={{ maxheight: "300px" }}> 
  <CardBody key= {id}>
  
    <CardImg rounded top src={avatar} style={{height:"300px"}}/><p className="font-weight-bold">{name}</p> 
    <div className="border-bottom"></div><p className="float-right ">{bio}</p>
</CardBody>

</div>
</div>
</div>)}


  </div></div>;
}

function Teammen(){


  return(


    <ApolloProvider client={client}>

<TeamLists />

</ApolloProvider>
  )
}


export default Teammen;