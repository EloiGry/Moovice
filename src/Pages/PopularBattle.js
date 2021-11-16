import React, { Component } from 'react';
import Card from '../components/Card';

class PopularBattle extends Component {
    constructor () {
        super()
        this.state = {
            movies : [],
            currentBattle : 2,
        }
        this.onClickCard = this.onClickCard.bind(this)
    }
    
    componentDidMount() {
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=74ff4d5b18f55c304a239fadf716fe2f")
          .then(response => response.json())
          .then(result => {
              this.setState({ movies: result.results })
            })
        }
        
    onClickCard (id) {
        

        if (!localStorage.getItem("favorites")) {
            let newArray = []
            newArray.push(id)
            localStorage.setItem("favorites", JSON.stringify(newArray))
        } else {
            let favorites = JSON.parse(localStorage.getItem("favorites"))
            favorites.push(id)
            localStorage.setItem("favorites", JSON.stringify(favorites))
        }
        
        
        
        this.setState ({currentBattle : this.state.currentBattle + 2})
    }

    render() {
        const {movies, currentBattle} = this.state
        const arrayMovies = movies.filter((movie, index) => {return index < currentBattle })
        const newArrayMovies = arrayMovies.splice(currentBattle - 2, 2)
        // console.log(newArrayMovies);
        // console.log(currentBattle)

        return (
            <div className="col-12 m-1 d-flex">
                {newArrayMovies.map(movie => 
                <Card 
                onClick={()=>this.onClickCard(movie.id)} 
                title={movie.title} 
                release_date={movie.release_date} 
                overview={movie.overview} 
                poster_path={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}/>)} 
            </div>
        );
    }
}

export default PopularBattle;