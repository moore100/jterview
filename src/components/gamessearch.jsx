import React, { useState } from "react";
import {GameList,Search }  from "../components";
import { useLazyQuery, gql } from "@apollo/client";

const SEARCH = gql`
	query Search($match: String) {
  games(order_by: {title: asc}, where: {title: {_ilike: $match}}) {
    id
    title
    genre
  }
}

`;


const GameSearch=()=>{
	const [inputVal,setInputVal ] = useState("");
	const [search, {loading, error, data }] = useLazyQuery(SEARCH);

return(
<div>

<Search 
inputVal={inputVal}
onChange={(e) => setInputVal(e.target.value)}
onSearch={() => search({ variables: {match: `%{inputVal}%`}})}
/>
<GameList  newGames={ data ? data.games : null } />

</div>
	)

}
export default GameSearch;