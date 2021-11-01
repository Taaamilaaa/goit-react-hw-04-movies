import "./App.css";
import { Route, Switch } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Navigation = lazy(() => import('../Navigation/Navigation'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));

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
      <Route path="/movies">
        <MoviesPage title={"Find the movie))"}
        />
      </Route>
      </Switch>
      </Suspense> 
    </div>
  );
};

export default App;
