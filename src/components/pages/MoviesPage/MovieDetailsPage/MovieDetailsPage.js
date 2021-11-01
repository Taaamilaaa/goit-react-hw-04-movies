import { Link, NavLink } from "react-router-dom";
import { useParams} from "react-router";
import { fetchMovieById } from "../../../../services/services";
import default_poster from "../../../../images/default_poster.jpg";
import { useEffect, useState } from "react";
import styles from "./MovieDetailsPage.module.css"


function MovieDetailsPage() {      
  const params = useParams();
  const [title, setTitle] = useState('');
  const [poster, setPoster] = useState('');
  const [overview, setOverview] = useState('');
  const [vote, setVote] = useState(null)
  const [genres, setGenres] = useState([]);
  const [date, setDate] = useState(null);

  const paramsId = params.movieId.slice(1);

  useEffect(() => {
    fetchMovieById(paramsId).then(({ data }) => {
      const { title, name, poster_path, overview, genres, vote_count, release_date } = data;
setPoster(`https://image.tmdb.org/t/p/w300/${poster_path}` ?? default_poster);
      setTitle(title ?? name);
      setOverview(overview);
      setGenres(genres);
      setVote(vote_count);
      setDate(release_date)
    })
     // eslint-disable-next-line
  }, []);
  
  return (
    <section className={styles.section}>
       <Link to="/"> <button className={styles.button}>Go back</button></Link>
      <h1 className={styles.title}>{title}<span>({date})</span></h1>
      
      <div className={styles.flex}>
        <img src={poster} alt={title} className={styles.img} />
      <div className = {styles.content}>
       
        <p>
          User score: <span> {vote}</span>
        </p>
        <h2 className = {styles.title}>Overview</h2>
         <p> {overview}</p>
        <h2 className = {styles.title}>Genres:</h2>       
         <ul> {genres.map(({name, id}) => <li key = {id}>{name}</li>)} </ul>
      </div>
  </div>
      <div>
        <h2 className = {styles.title}>Additional information</h2>
        <ul>
          <li>
            <NavLink className = {styles.link}exact to ="/movies/:movieId/cast">Cast</NavLink>
          </li>
          <li >
            <NavLink className = {styles.link} to ="/movies/:movieId/reviews">Reviews</NavLink>
          </li>
        </ul>
      </div>
    
     
    </section>
  );
};

export default MovieDetailsPage;