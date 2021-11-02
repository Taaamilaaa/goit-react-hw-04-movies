import styles from "./SearchForm.module.css"
import { useState } from "react";

export const SearchForm = ({ onSearchSubmit, title}) => {
  const [query, setQuery] = useState("");

   const handleSearchChange = (e) => {
     setQuery(e.target.value.toLowerCase());
    
  };
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(query);
     setQuery("");
  }
  
    return(
    <form className={styles.form} onSubmit={handleSearchSubmit}>
      <label className={styles.title}>{title}</label>
        <input
          name="query"
          value={query}
          placeholder="enter query"
                onChange={handleSearchChange}
                className={styles.input}
        />
        <button className={styles.button} type="submit">SEARCH</button>
      </form>
    )
}