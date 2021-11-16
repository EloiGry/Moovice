import React, { Component } from 'react';

class Favorites extends Component {
    constructor() {
        super() 
        this.state = {
            movies : [],
            favIDs : this.getStorage()
        }
    }

    getStorage () {
        let favorites = JSON.parse(localStorage.getItem("favorites"))
        console.log("hello", favorites)
    }

    getMovie (id) {

    }
    
    render() {
        return (
            <div>
                <h1> Favorites </h1>
            </div>
        );
    }
}

export default Favorites;