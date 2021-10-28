import { MovieDetailsPage } from "../MovieDetailsPage/MovieDetailsPage";
import { Cast } from "../Cast/Cast";
import { Reviews } from "../Reviews/Reviews";
import { Route } from "react-router";

export const MoviesPage = ({poster, overview, genres, title}) => {
    
  return (
      <>
          
        <MovieDetailsPage title={ title}  poster={poster} overview={ overview} genres={genres} />
      <Route exact path = "/movies/:movieId/cast">       
        <Cast />
      </Route>
      <Route path = "/movies/:movieId/reviews">
        <Reviews />
      </Route>
    </>
  );
};
