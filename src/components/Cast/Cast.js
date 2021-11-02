import { useEffect, useState } from "react";
import { fetchMovieActorsById } from "../../services/services";
import styles from "./cast.module.css";
import default_noPhoto from "../../images/default_noPhoto.png"

function Cast({ id }) {
  
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetchMovieActorsById(id)
      .then(({ data }) => {       
        setActors(data.cast);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <>
      {actors.length > 0 && (
        <section className={styles.section}>
          <ul className={styles.list}>
          {actors.map(({ id, character, name, profile_path }) => {
            return (
              <li key={id} className={styles.item}>
                <img
                  src={profile_path ? `https://image.tmdb.org/t/p/w300/${profile_path}` : default_noPhoto}
                  alt={name}
                  className={styles.img}
                ></img>
                <div className={styles.content}>
                <p className={styles.name} >{name}</p>
                <p>Character:{character}</p>
                </div>             
                
              </li>
            );
          })}
        </ul>
        </section>
        
      )}
    </>
  );
}
export default Cast;
