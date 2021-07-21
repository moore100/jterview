import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
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

const USERS_QUERY = gql`{
  games {
    id
    created_at
    description
    genre
    title
  }
}`;

const GameList = ()=> {
  const { loading, error, data } = useQuery(USERS_QUERY);

  if (loading) return <p>Loading...</p>;



  return <div className="row pt-2">
      {data.games.map(({ id, title, description,genre })=> <div className="col-md-3 col-12 col-sm-12" key={id}>
<div className="pr-2 pl-2 pb-2">
<Card>
  <Card.Img variant="top" src="https://jiwe.io/static/media/logo-black.6ae66a8c.png" />
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button className="btn btn-dark">{genre}</Button>
  </Card.Body>
</Card>
</div>
</div>)}
    </div>;
}

export default GameList;