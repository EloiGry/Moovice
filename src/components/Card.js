import React, { Component } from 'react';

class Card extends Component {
    render() {
        const {poster_path, release_date, overview, title, onClick} = this.props
        return (
            <div className="border col-4" onClick={onClick} >
                <img src={poster_path} alt="affiche"  />
                <p> {title} </p>
                <p> {release_date} </p>
                <p> {overview} </p>
            </div>
        );
    }
}

export default Card;