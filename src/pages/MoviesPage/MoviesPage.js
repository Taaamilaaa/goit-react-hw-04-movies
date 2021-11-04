import { useLocation, useHistory } from "react-router";
import { useState, useEffect } from "react";
import { fetchMovieByQuery } from "../../services/services";
import { MoviesList } from "../../components/MoviesList/MoviesList";
import { SearchForm } from "../../components/SearchForm/SearchForm";

function MoviesPage({ title }) {
  const [foundFilms, setFoundFilms] = useState([]);
  // eslint-disable-next-line
  const [query, setQuery] = useState("");

  const location = useLocation();
  const { search } = useLocation();
  const history = useHistory();

  const queryValue = new URLSearchParams(search).get("query");

  const onSearchSubmit = (query) => {
    setQuery(query);
    history.push({ ...location, search: `query=${query}` });
    console.log(history);
  };

  useEffect(() => {
    if (!queryValue === "") {
      return;
    }
    if (search === "") {
      return;
    }
    fetchMovieByQuery(queryValue)
      .then((response) => {
        setFoundFilms(response.data.results);
      })
      .finally(setQuery(""))
      .catch((err) => console.log(err));

    history.push({ search: `query=${queryValue}` });
  }, [queryValue, search, history]);

  return (
    <>
      <SearchForm onSearchSubmit={onSearchSubmit} title={title} />
      {foundFilms.length > 0 && (
        <MoviesList arrOfMovies={foundFilms} location={location} />
      )}
    </>
  );
}
export default MoviesPage;
