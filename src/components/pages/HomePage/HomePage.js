import { fetchPopularAPI } from "../../../services/services";
import { useHistory, useLocation } from 'react-router';
import { useState, useEffect } from "react";


// import styles from './homePage.module.css';
import {MoviesList} from '../../MoviesList/MoviesList'


function HomePage({ title }){
  const [movies, setMovies] = useState([]);

  const location = useLocation();
  // const history = useHistory();
    
  
  useEffect(() => {
    fetchPopularAPI().then((moviesArr) => {
      setMovies(moviesArr);
    });   
  });

  return (
    <>
      <h1 className="title">{title}</h1>
      <MoviesList arrOfMovies={movies} location={location}/>
      </>
  );
};

export default HomePage;