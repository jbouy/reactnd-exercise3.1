import React, {Component} from 'react';

class FavoriteMoviesList extends Component {
  render() {
    return (
      <ul>
      {this.props.profiles.map((profile) => (
      	<li>
      		{`${this.getUser(profile.userID).name}'s favorite movie is ${this.getMovie(profile.favoriteMovieID).name}`}
      	</li>
      ))}
      </ul>
    )
  }

	getUser = (userID) => this.props.users[userID];

	getMovie = (movieID) => this.props.movies[movieID];
}

export default FavoriteMoviesList;