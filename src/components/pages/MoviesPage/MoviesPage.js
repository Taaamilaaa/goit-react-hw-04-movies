import { Route, useLocation, Switch } from "react-router";
import { useState, lazy, Suspense } from "react";

import { fetchMovieByQuery } from "../../../services/services";
import { MoviesList } from "../../MoviesList/MoviesList";
import { SearchForm } from "../../SearchForm/SearchForm";

const MovieDetailsPage = lazy(() =>import("./MovieDetailsPage/MovieDetailsPage"));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));


function MoviesPage({ title }) {
const [foundFilms, setFoundFilms] = useState([]);
const location = useLocation();

  const onSearchSubmit = (query) => {
    fetchMovieByQuery(query)
      .then((response) => {
        setFoundFilms(response.data.results);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      
      <SearchForm onSearchSubmit={onSearchSubmit} title={ title}/>
   
      {foundFilms.length > 0
        && (<MoviesList arrOfMovies={foundFilms} location={location} />
      )}
      <Suspense
        className="title"
        fallback={<h2>Please wait, I'm loading . . . </h2>}
      >
        <Switch>
          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route>
            <MovieDetailsPage />
          </Route>

          <Route exact path="/movies/:movieId/cast">
            <Cast />
          </Route>

          <Route path="/movies/:movieId/reviews">
            <Reviews />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}
export default MoviesPage;
