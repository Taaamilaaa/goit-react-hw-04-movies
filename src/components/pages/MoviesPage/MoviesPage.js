import {  useLocation } from "react-router";
import { useState } from "react";

import { fetchMovieByQuery } from "../../../services/services";
import { MoviesList } from "../../MoviesList/MoviesList";
import { SearchForm } from "../../SearchForm/SearchForm";


function MoviesPage({ title }) {  
const [foundFilms, setFoundFilms] = useState([]);
  const location = useLocation();
 

  const onSearchSubmit = (query) => {
    fetchMovieByQuery(query)
      .then((response) => {
        setFoundFilms(response.data.results);
      })
      .catch((err) => console.log(err));
    
   
  };

  return (
    <>      
      <SearchForm onSearchSubmit={onSearchSubmit} title={ title}/>   
      {foundFilms.length > 0
        && (<MoviesList arrOfMovies={foundFilms} location={location} />
      )}     
    </>
  );
}
export default MoviesPage;
