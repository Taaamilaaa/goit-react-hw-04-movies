import { fetchPopularAPI } from "../../services/services";
import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import styles from './homePage.module.css'

export const HomePage = ({ title, selectedMovieId }) => {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    fetchPopularAPI().then((moviesArr) => {
      setMovies(moviesArr);
    });   
  });
  
  const selectMovie = (e) => selectedMovieId(e.currentTarget.id);

  return (
    <>
      <h1 className = {styles.title}>{title}</h1>
      <ul className = {styles.list}>
        {movies.map(({ title, id, name }) => {
          return (
            <li className = {styles.item} onClick={selectMovie} id={id} key={id}>
              <Link  to={`/movies/:${id}`}>{title ?? name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
