import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery, useMutation } from '@apollo/react-hooks';

const GAMES_DETAILS= gql`
query GetGames($id: String!){
  games(id: $id) {
    id
    created_at
    description
    genre
    title
  }
}`;

 
const GameDetails = ({ id }) => {
	const { data } = useQuery(GAMES_DETAILS, {variables: {id}});
	
	if(data && data.game){
		const {game: {title, genre, description, created_at}} = data;
		return <div className="card">
		<h2>Details></h2>
		<p>Title: {title}</p>
		<p>Genre: {genre}</p>
		<p>Description: {description}</p>
		</div>;

	}

return null;

}
export default GameDetails;