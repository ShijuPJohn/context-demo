import React, {useState, createContext, useReducer} from "react";


export const MovieContext = createContext({});

const movieReducer = (state, action) => {
    console.log('reducer called')
    switch (action.type) {
        case 'ADD':
            return [...state, action.payload];
        case 'REMOVE':
            return [];
        default:
            return state
    }
}
const initialState = [{
    name: 'Scent of a woman',
    year: 1990,
},
    {
        name: 'Unforgiven',
        year: 1980,
    },
    {
        name: 'The Good The Bad and The Ugly',
        year: 1970,
    }
];

export const MovieProvider = (props) => {
    // const [movies, setMovies] = useState(initialState);
    const [movies, dispatchMovies] = useReducer(movieReducer, initialState)
    return (
        <MovieContext.Provider value={[movies, dispatchMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}