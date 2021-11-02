import { useEffect, useState } from "react";
import { fetchMovieOverviewById } from "../../services/services";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import styles from "./reviews.module.css";

function Reviews({ id }) {
  const [overviews, setOverviews] = useState([]);

  useEffect(() => {
    fetchMovieOverviewById(id).then(({ data }) => {
      setOverviews(data.results);
    });
  }, [id]);

  return (
    <>
     {overviews.length > 0 ? (<ul className={styles.list}>
      {overviews.map(({ id, author, content }) => {
        return (
          <li key={id} className={styles.item}>
            <SimpleBar
              style={{
                maxHeight: 300,
              }}
            >
              <h3>{author}:</h3>
              <p>{content}</p>
            </SimpleBar>
          </li>
        );
      })}
    </ul>): (<p className={styles.defaultText}>Sorry, there are no reviews.</p>)}
    </>
    
  );
}
export default Reviews;
