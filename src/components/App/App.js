import "./App.css";
import { Route } from "react-router";
import { Navigation } from "../Navigation/Navigation";
import { HomePage } from "../pages/HomePage";
import { MoviesPage } from "../pages/MoviesPage";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Route path="/" exact>
        <HomePage title={'Trending today))'}/>
      </Route>
      <Route path="/movies">
        <MoviesPage />
      </Route>
    </div>
  );
}

export default App;
