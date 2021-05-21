import React, {useContext} from 'react';
import {MovieContext} from "./MovieContext";

const Navbar = (props) => {
    const [movies, setMovies] = useContext(MovieContext)
    return (
        <header className="App-header">
            <nav>
                <ul style={{listStyleType: 'none'}}>
                    <li style={{display: "inline-block"}}>
                        Movie List
                    </li>
                    <li style={{display: "inline-block"}}>
                        Count:{movies.length}
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;