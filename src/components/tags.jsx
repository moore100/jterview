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


const TagList=()=>{

	const TAG_QUERY = gql`
		 {
  tags(limit: 3) {
  	id
    name
  }
}
	`;


const{ loading, error, data } = useQuery(TAG_QUERY);
if(loading) return <div className="row pt-5 pl-5 justify-content-center"> <Spinner animation="grow" size="sm" />
  <Spinner animation="grow" /></div>;

return  <div className="row pt-2  pl-1 pb-2">
{data.tags.map(({id,name}) =><div class="col-md-4 col-4 col-sm-4">
<div className="card bg-light shadow-lg  pt-2 pb-2" key={id} style={{height:"80%" }}>
<small className="pt-3 pb-4  text-center pr-1 pl-1 font-weight-bold "> {name}</small>
</div>
</div>)}

</div>;


}

function Tagsli(){
	return(
<ApolloProvider client={client}>

<TagList />

</ApolloProvider>

		)
}
export default Tagsli;