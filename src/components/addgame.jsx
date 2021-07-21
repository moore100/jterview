import React, { useState } from "react";
import { gql } from 'apollo-boost';
import { useQuery, useMutation } from '@apollo/react-hooks';
import Form from 'react-bootstrap/Form';
import Toast from 'react-bootstrap/Toast';


import { Alert,
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
   Container, Row, Col,
  Button,Breadcrumb, BreadcrumbItem } from "shards-react";


const CREATE_GAME = gql`

	mutation insert_games($title:String!, $genre:String! $description:String!) {
  insert_games(objects: {title: $title,genre:$genre,description:$description}) {
    returning {
      id
      language
      title
      updated_at
      genre
    }
  }
}
`;



const GameForm = () =>{
	const [show, setShow] = useState(false);
	const [title, setTitle] = useState('');
	const [genre, setGenre] = useState('');
	const [description, setDescription] = useState('');

	const [insert_games, {error}] = useMutation(CREATE_GAME, {variables: {title, genre,description}, refetchQueries: ["Gamess"]} );
 if(error){
 	console.log('error', error);
 }
 function _refreshPage(){
        
        window.location.reload();
      
    };

return <div>
<Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <img
              src="https://jiwe.io/static/media/logo-black.6ae66a8c.png"
              className="rounded me-2"
              alt=""
             style={{height:"30px"}}
              roundedCircle
            />
            <strong className="me-auto">jiwebot</strong>
            <small>just now</small>
          </Toast.Header>
          <Toast.Body>Woohoo, you just added a new game!</Toast.Body>
        </Toast>
    
 
 <Form.Control required  type="text" placeholder="enter Title" onChange={e => setTitle(e.target.value)} />

<br />
 <Form.Control required  type="text" placeholder="enter game genre" onChange={e => setGenre(e.target.value)} />
<br />
<Form.Control required  as="textarea" placeholder="enter game description" onChange={e => setDescription(e.target.value)}  rows={3} />

<br />

<button style={{width:"170px"}}  size="sm" className="float-right btn btn-dark" onClick={() =>{ insert_games(); setShow(true);}}> add game</button>

</div>
}

export default GameForm;