import React, { useState } from "react";
import ReactDOM from 'react-dom';
import  { GameList,Navi,GameForm,Tagsli } from "../components";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Form from 'react-bootstrap/Form';
import { Alert,
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
   Container, Col,
  Button,Breadcrumb, BreadcrumbItem } from "shards-react";
const client = new ApolloClient({
  uri: 'https://jiwe-demo.herokuapp.com/v1/graphql',
 headers: {"content-Type": "application/json",
'x-hasura-admin-secret': 'jiwe-interview'},
});



const Search=({ inputVal, onChange, onSearch })=>{
  return(<>
    <div className="col-md-8 col-8 col-sm-8">
<Form.Control value={inputVal} onChange={onChange} placeholder="JIWE GAME SEARCH" />
</div>
<div className="col-md-4 col-4 col-sm-4">
<button onClick={onSearch} className="btn btn-dark">search</button>
</div>
</>
    );
};
export default Search;