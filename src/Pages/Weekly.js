import React, { Component } from 'react';
import Card from '../components/Card';
import moment from 'moment'

class Popular extends Component {
    constructor () {
        super()
        this.state = {
            movies : [],
        }
    }

    componentDidMount() {
        fetch(`http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${this.moment()}&primary_release_date.lte=${this.moment()}&api_key=74ff4d5b18f55c304a239fadf716fe2f`)
          .then(response => response.json())
          .then(result => {
            this.setState({ movies: result.results })
          })
      }
    render() {
        const { movies } = this.state
        console.log(movies);
        return (
            <div className="container">
                <h1> Popular </h1>
                <div className="row"> 
                    {movies.map(movie => 
                        <Card title={movie.title} release_date={movie.release_date} overview={movie.overview} poster_path={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}/>)}
                </div>
            </div>
        );
    }
}

export default Popular;