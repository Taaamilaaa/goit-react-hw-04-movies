import { fetchPopularAPI } from "../../services/services";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const HomePage = ({ title, selectedMovieId }) => {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    fetchPopularAPI().then((moviesArr) => {
      setMovies(moviesArr);
    });
   // eslint-disable-next-line 
  });
  
  const selectMovie = (e) => selectedMovieId(e.currentTarget.id);

  return (
    <>
      <h1>{title}</h1>
      <ul>
        {movies.map(({ title, id, name }) => {
          return (
            <li onClick={selectMovie} id={id} key={id}>
              <Link  to="/movies/:movieId">{title ?? name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
