import React from "react";
import {Games} from "../components";
import ReactDOM from 'react-dom';
import  { GameList,Navi,GameForm,Tagsli } from "../components";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
const client = new ApolloClient({
  uri: 'https://jiwe-demo.herokuapp.com/v1/graphql',
 headers: {"content-Type": "application/json",
'x-hasura-admin-secret': 'jiwe-interview'},
});

function Home(){
	return(

<div className="container-fluid">

<div className="home row">

 <ApolloProvider client={client}>
<div className="container-fluid bg-light"  style={{height:"320px", borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px"}}>
<div className="row pt-2">
<div className="col-md-12 col-12 col-sm-12">
  <h4 className="text-center pt-4 font-weight-bold text-uppercase">Whats more fun than playing games 😍 is bringing them to life</h4> 
    
    <div className="row"> <small className="pl-2 pt-2 pr-2 text-center">
              I always wonder! wy not just jump up to the moon and back! then i realize im not a rocket! eyah i know that was a dry joke !lol .
            </small></div>
            <div className="pt-1 pb-2 border-bottom"></div>
</div>
</div>


<span className="badge badge-dark">Categories</span>

<Tagsli />



</div>


</ApolloProvider> 
 <div id="root" className="pb-2"></div>

<div className="pl-2 pr-2 pb-2">
<h4 className="text-right font-weight-bold text-uppercase ">Stay in the loop 😎</h4>
      <div class="container-fluid card bg-dark" style={{borderRadius: "20px"}}>
        <div class="row align-items-center my-5">
          <div class="col-md-7 col-12 col-sm-12">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://jiwe.studio/assets/images/usoni_prophecy.png?v=7b5663fd1f"
              alt=""
              style={{height:"500px", width:"100%"}}
            />
          </div>
          
          <div class="col-md-5  col-12 col-sm-12 ">
          <div className="text-white  pl-2 pr-2 pt-2 pb-2">
            <h1 class="font-weight-bold text-white text-center">USONI PART 2: THE PROPHECY</h1>
           
            <small className="text-center">
              After the shipwreck which separated her from Ulysse, Ophelia lands on one of Lampedusa shores. Is Ophelia going to be sent back to the Hell she thought she had escaped from?


            </small>
            <h5 className="text-right font-weight-bold">Coming Soon!.</h5>
          </div>
          </div>


          </div>

        </div>
      </div>
    </div>
 <ApolloProvider client={client}>
 <h5 className="font-weight-bold text-right">Games</h5>
<GameList />
 </ApolloProvider>
</div>




		);
}
export default Home;