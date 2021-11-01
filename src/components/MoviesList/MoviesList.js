import { Link } from "react-router-dom";
import default_poster from "../../images/default_poster.jpg";
import styles from './MoviesList.module.css'

export const MoviesList = ({ arrOfMovies, location }) => {
  
  return (
    <ul className = {styles.list}>
      {arrOfMovies.map(({ id, title, name, poster_path }) => {
        let poster = poster_path
          ? `https://image.tmdb.org/t/p/w300/${poster_path}`
          : default_poster;
        
        return (
          <li key={id} className = {styles.item}>
            <Link className = {styles.link}
              to={{                
                pathname: `/movies/:${id}`,
                state: {
                  from: { location, label: `back to HOME PAGE` },
                },
              }}
            >
              <div>
                <img src={poster} alt="" className = {styles.img}></img>
                <h2 className = {styles.title}>{title ?? name}</h2>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
