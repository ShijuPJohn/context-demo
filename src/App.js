import './App.css';
import {Fragment} from "react";
import Navbar from "./Navbar";
import MovieList from "./MovieList";
import {MovieProvider} from "./MovieContext";

function App() {
    return (
        <MovieProvider>
            <Fragment>
                <Navbar/>
                <MovieList/>
            </Fragment>
        </MovieProvider>
    );
}

export default App;
