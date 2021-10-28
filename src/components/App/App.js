import "./App.css";
import { useState, useEffect } from "react";
import { Route } from "react-router";
import { Navigation } from "../Navigation/Navigation";
import { HomePage } from "../pages/HomePage";
import { MoviesPage } from "../pages/MoviesPage";
import { fetchQueryAPI } from "../../services/services";


const App = () => {
   
  // const [genres, setGenres] = useState([]);
  // const [overview, setOverview] = useState("");
  // const [name, setName] = useState("");
  // const [poster, setPoster] = useState("");


  const selectedMovieId = (id) => {
    
    // fetchQueryAPI(id).then(({ data }) => {
    //   console.log(data);
    //   const {       
    //     genres,
    //     overview,
    //     title,
    //     name,
    //     poster_path
    //   } = data;

    //   setPoster(poster_path);
    //   setGenres(genres);
    //   setOverview(overview);
    //   if (!title) {
    //     setName(name);
    //   } setName(title);

    
    // });
 
    // setGenres([]);
    // setOverview("");
    // setName("");
   
   
  };

  return (
    <div className="App">
      <Navigation />
      <Route path="/" exact>
        <HomePage
          selectedMovieId={selectedMovieId}
          title={"Trending today))"}
        />
      </Route>
      <Route path="/movies">
        <MoviesPage
      poster_path = {poster}
      
          title={name}
       
          overview={overview}
          genres={genres}
        />
      </Route>
    </div>
  );
};

export default App;
