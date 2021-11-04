import { fetchPopularAPI } from "../../services/services";
import { useLocation } from 'react-router';
import { useState, useEffect } from "react";


// import styles from './homePage.module.css';
import {MoviesList} from '../../components/MoviesList/MoviesList'


function HomePage({ title }){
  const [movies, setMovies] = useState([]);

  const location = useLocation();    
  
  useEffect(() => {
    fetchPopularAPI().then((moviesArr) => {
      setMovies(moviesArr);
    }).catch(error => {
      return alert(error.massage)
    });   
  }, []);

  return (
    <>
      <h1 className="title">{title}</h1>
      <MoviesList arrOfMovies={movies} location={location}/>
      </>
  );
};

export default HomePage;