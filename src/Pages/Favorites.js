import React, { Component } from 'react';
import Card from '../components/Card';

class Favorites extends Component {
    constructor() {
        super() 
        this.state = {
            movies : [],
            favIDs : this.getStorage()
        }
    }

    componentDidMount () {
        this.state.favIDs.forEach(id => {
            this.getMovie(id)
        });
    }

    getStorage () {
        let favorites = JSON.parse(localStorage.getItem("favorites"))
        return favorites
    }

    getMovie (id) {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=74ff4d5b18f55c304a239fadf716fe2f`)
          .then(response => response.json())
          .then(result => {
              this.setState({ movies: [result, ...this.state.movies]})
            })
    }

    render() {
        const {movies} = this.state
        return (
            <div>
                <h1> Favorites </h1>
                {movies.map(movie => 
                    <Card 
                    title={movie.title} 
                    release_date={movie.release_date} 
                    overview={movie.overview} 
                    poster_path={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}/>)} 
            </div>
        );
    }
}

export default Favorites;