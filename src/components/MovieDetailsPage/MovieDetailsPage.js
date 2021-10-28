import { Link, NavLink } from "react-router-dom";
import default_poster from "../../images/default_poster.jpg"

export const MovieDetailsPage = ({ title, poster_path, overview, genres, date, popularity}) => {
  let poster = poster_path
    ? `https://image.tmdb.org/t/p/w300/${poster_path}`
    : default_poster;      
      
  return (
    <section>
       <div>
       <Link to ="/"> <button>Go back</button></Link>
        <img src={poster} alt={title} />
      </div>

      <div>
        <h1>{title}<span>({date})</span></h1>
        <p>
          User score: <span>{ popularity}</span>
        </p>
        <h2>Overview</h2>
         <p> {overview}</p>
        <h2>Genres</h2>       
         <ul> {genres.map(({name, id}) => <li key = {id}>{name}</li>)} </ul>
      </div>

      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <NavLink exact to ="/movies/:movieId/cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to ="/movies/:movieId/reviews">Reviews</NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
};
