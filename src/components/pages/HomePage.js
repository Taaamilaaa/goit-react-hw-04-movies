import { fetchPopularAPI } from "../../services/services";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const HomePage = ({ title }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchPopularAPI().then((moviesArr) => {
      setMovies(moviesArr);
    });
  });

  return (
    <>
      <h1>{title}</h1>
      <ul>
        {movies.map(({ title, id, name }) => (
          <li key={id}>
            <Link>{title ?? name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
