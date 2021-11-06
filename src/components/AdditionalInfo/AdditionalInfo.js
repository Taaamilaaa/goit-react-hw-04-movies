import styles from "../../pages/MovieDetailsPage/MovieDetailsPage.module.css";
import { NavLink } from "react-router-dom";

export const AdditionalInfo = ({ location, url }) => {
     
  return (
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
  )
};
