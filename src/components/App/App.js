import "./App.css";
import { Route, Switch, Redirect } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Navigation = lazy(() => import('../Navigation/Navigation'));
const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../../pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../../pages/MovieDetailsPage/MovieDetailsPage'));

const App = () => {  

  return (
    <div className="container">
      <Suspense className = "title" fallback = {<h2>Please wait, I'm loading . . . </h2>}>
      <Navigation />
      <Switch>
         <Route path="/" exact>
        <HomePage        
          title={"Trending today))"}
        />
      </Route>
      <Route path="/movies" exact>
        <MoviesPage title={"Find the movie))"}
        />
          </Route>
           <Route  path="/movies/:movieId" >
            <MovieDetailsPage />
          </Route>
           <Redirect to="/" />
      </Switch>
      </Suspense> 
    </div>
  );
};

export default App;
