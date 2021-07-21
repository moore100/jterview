import React, { useState } from "react";
import {Games} from "../components";
import ReactDOM from 'react-dom';
import  { GameList,Navi,GameForm,Tagsli,Search,Comments } from "../components";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';
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


function Gamess(){


  return(


    <ApolloProvider client={client}>


<div className="bg-dark pb-5" style={{borderBottomLeftRadius:"30px", borderBottomRightRadius:"30px"}}>
<Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.cnet.com/a/img/qJS3Wbnpz2kcq_7UAw_YwtqB_Cc=/756x425/2021/06/09/c18b929c-c84e-4dfe-ab38-9ffc6d2845fc/screen-shot-2021-06-09-at-11-21-26-am.png" alt="First slide"
    />
    <Carousel.Caption>
     <h5 className="text-white text-uppercase font-weight-bold">Some game i dont know the name</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.cnet.com/a/img/c4-_xvW4jVPiMueilW5eHgqvFyk=/756x425/2021/01/03/60ad9fc2-dff4-4174-bb00-929706e241b1/deathloop.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
       <h5 className="text-white text-uppercase font-weight-bold">Another one I dont know</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.cnet.com/a/img/kUUQE9l3CgBRlqz-5wxgC2J0aCo=/756x425/2021/06/13/ea00e2ac-5185-47cc-abba-c5ba8661de52/guardians-of-the-galaxy-new-cropped-hed-1272098-1280x0.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5 className="text-white text-uppercase font-weight-bold">Guardians Of The Galaxy</h5>
      <p className="text-white font-weight-bold text-capitalize">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel></div>
<div className="container-fluid">
<div className="row pt-2 pl-2 pr-2">
<Search />
</div>
</div>
<div className="container-fluid">
<div className="row justify-content-center">
<span className="font-weight-bold text-grey">Hot Right now<div className="border-bottom"></div></span>

<Tagsli />
</div>
</div>


<div className="container-fluid">
<div className="row">
<div className="col-md-3 col -12 col-sm-12">
<div className="pt-2 pl-2 pr-2">
<div className="card pt-2 pl-2 pr-2 pb-2">
 <CardHeader >Submit a Game</CardHeader>
<div className="pt-2"></div>
<GameForm />
</div>
</div>
</div>

<div className="col-md-9 col-12 col-sm-12 ">
<GameList />

</div>
</div>
</div>
</ApolloProvider>
  )
}

export default Gamess;