import { NavLink, useRouteMatch, useHistory, useLocation} from "react-router-dom";
import { useParams, Route} from "react-router";
import { fetchMovieById } from "../../services/services";
import default_poster from "../../images/default_poster.jpg";
import { useEffect, useState, Suspense, lazy } from "react";
import { Button } from "../../components/Button/Button";
 
// import default_noData from "../../../images/default_noData.png"

import styles from "./MovieDetailsPage.module.css";

const Cast = lazy(() => import('../../components/Cast/Cast'));
const Reviews = lazy(() => import('../../components/Reviews/Reviews'));

function MovieDetailsPage() {
  const params = useParams();
  const { url } = useRouteMatch();
  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState("");
  const [overview, setOverview] = useState("");
  const [vote, setVote] = useState(null);
  const [genres, setGenres] = useState([]);
  const [date, setDate] = useState(null);
  
  const history = useHistory();
  const location = useLocation();
 
  const paramsId = params.movieId.slice(1);

  useEffect(() => {
    
    fetchMovieById(paramsId).then(({ data }) => {
      if (data === "undefined") {
        return;
     }
     const {
        title,
        name,
        poster_path,
        overview,
        genres,
        vote_count,
        release_date,
      } = data;
     
      setPoster(
        `https://image.tmdb.org/t/p/w300/${poster_path}` ?? default_poster
      );
      setTitle(title ?? name);
      setOverview(overview);
      setGenres(genres);
      setVote(vote_count);
      setDate(release_date);
    }).catch(error => {
      if (error) {
        alert("No data!!!");  

      }
    });
    
  }, [paramsId]);
  const goHome = () => {
    history.push(location?.state?.from ?? '/');
    console.log(history);
  }
  
  return (
    <>
      {paramsId && (
        <section className={styles.section}>
          <Button onClick={ goHome} text ="Go back"/>
          <h1 className={styles.title}>
            {title}
            <span>({date})</span>
          </h1>

          <div className={styles.flex}>
            <img src={poster} alt={title} className={styles.img} />
            <div className={styles.content}>
              <p>
                User score: <span> {vote}</span>
              </p>
              <h2 className={styles.title}>Overview:</h2>
              <p> {overview}</p>
              <h2 className={styles.title}>Genres:</h2>
              <ul>
                {genres.map(({ name, id }) => (
                  <li key={id}>{name}</li>
                ))}{" "}
              </ul>
            </div>
          </div>
          <div>
            <h2 className={styles.title}>Additional information:</h2>
            <ul>
              <li>
                <NavLink
                  className={styles.link}
                  activeClassName={styles.activeLink}
                  exact
                  to={{
                pathname: `${url}/cast`,
                state: { ...location.state },
              }}
                >
                  Cast:
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={styles.link}
                  activeClassName={styles.activeLink}
                  to={{
                pathname: `${url}/reviews`,
                state: { ...location.state },
              }}
                >
                  Reviews:
                </NavLink>
              </li>
            </ul>
          </div>
          
           <Suspense className = {styles.title} fallback={<h2>Loading...</h2>}>
            <Route path= "/movies/:movieId/cast">
              <Cast id={ paramsId}/>
            </Route>

            <Route path="/movies/:movieId/reviews">
              <Reviews id = {paramsId}/>
            </Route>
            
          </Suspense>
        </section>
      )}
    </>
  );
}

export default MovieDetailsPage;
