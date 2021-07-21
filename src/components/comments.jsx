import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Card from 'react-bootstrap/Card';
import { Alert,
 
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
   Container, Row, Col,
  Button,Breadcrumb, BreadcrumbItem } from "shards-react";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import GameDetails from "./Singlegame";
import Spinner from 'react-bootstrap/Spinner';
import Accordion from 'react-bootstrap/Accordion';

const COMMENTS= gql`{
  comments {
    content
    author_id
    game_comments {
      comment_id
      created_at
    }
  }
}`;

function Comments(){
  const { loading, error, data } = useQuery(COMMENTS);
  
 
  
  if (loading) return <div className="row pt-5 pl-5 justify-content-center"> <Spinner animation="grow" size="sm" />
  <Spinner animation="grow" /></div>;


  return <div>{data.comments.map(({ id, content, author_id })=> <div className="col-md-3 col-12 col-sm-12" key={id}><div className="col-md-4 col-4 ">{ content }</div><div className="col-md-4 col-4 ">{ author_id }</div><div className="border-bottom"></div></div>)};</div>
}

export default Comments;