import { NavLink } from "react-router-dom"
import styles from './navigation.module.css'

function Navigation(){
    return (
        <header className={styles.header}>
            <nav className={styles.navigation}>
            <NavLink className={styles.navLink} activeClassName = {styles.activeNavLink} exact to ="/">Home</NavLink>
            <NavLink className={styles.navLink} activeClassName = {styles.activeNavLink} to="/movies">Movies</NavLink>
            </nav>
        </header >
    )
};
export default Navigation;