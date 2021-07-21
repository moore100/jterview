import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navi,Home,Teams,Games,Tagsli } from "./components";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: 'https://jiwe-demo.herokuapp.com/v1/graphql'

});


function App() {
  
  return (
    <div className="App">
      <Router>
        <Navi />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/teams" exact component={() => <Teams />} />
          <Route path="/games" exact component={() => <Games/>} />
          <Route path="/tags" exact component={() => <Tagsli/>} />
           
          
          
         
        </Switch>
      </Router>
    </div>
  );
}
export default App;