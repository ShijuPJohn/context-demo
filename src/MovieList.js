import React, {useState, Fragment, useContext} from 'react';
import {MovieContext} from "./MovieContext";
import Movie from "./Movie";


const MovieList = (props) => {
    const [movies, dispatchMovies] = useContext(MovieContext)
    const addMovies = (e) => {
        console.log(movies)
        dispatchMovies({type: 'ADD', payload: {name: "Nothing", year: 1000}})
    }

    return (
        <Fragment>
            {/*{value && <h1>{value[0].name}</h1>}*/}
            {movies.map((movie) => (
                <Movie key={movie.name} movie={movie}/>
            ))}
            <button onClick={addMovies}>Click Me</button>
        </Fragment>
    )
};

export default MovieList;