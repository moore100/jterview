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
import { Comments } from "../components";







const GameList = ()=> {

  const USERS_QUERY = gql`query getgames{
  games {
    id
    genre
    title
    description
    game_comments {
      comment {
        content
        created_at
      }
      id
    }
  }
}`;

const COMMENTS= gql`{
  comments {
    id
    content
    author_id
    game_comments {
      comment_id
      created_at
    }
  }
}`;


  const { loading, error, data } = useQuery(USERS_QUERY,COMMENTS);
 
  const [GameId, setGameId] = useState(null);
  
  if (loading) return <div className="row pt-5 pl-5 justify-content-center"> <Spinner animation="grow" size="sm" />
  <Spinner animation="grow" /></div>;



  return<div className="row pt-2">
 
{data.games.map(({ id, title, description,genre,game_comments })=> <div className="col-md-3 col-12 col-sm-12" key={id}>
<div className="pr-2 pl-2 pb-2">
<Card>
  <Card.Img variant="top" src="https://jiwe.io/static/media/logo-black.6ae66a8c.png" />
  <Card.Body>
    <Card.Title >{title}</Card.Title>
<div className="border-bottom"></div>
<Card.Text>

{description}
    </Card.Text>
    <Button  onclick={() => setGameId(id)}   className="btn btn-dark">{genre}</Button>
  </Card.Body>
</Card>
</div>
</div>)}
      {GameId && <GameDetails id={GameId}></GameDetails>}
     
     </div>
    ;
}



export default GameList;