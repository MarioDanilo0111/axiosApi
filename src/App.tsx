import React, { useEffect, useState } from "react";
import "./App.css";
import { getMovies } from "./apiCall";
import { RootMovies } from "./interface/MoviesInterface.types";
import { MoviesStrore } from "./components/MoviesStore";
const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<RootMovies | null>(null);
  useEffect(() => {
    const fetchDataMovies = async () => {
      try {
        const moviesResponse = await getMovies("Avengers");
        setSearchQuery(moviesResponse);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDataMovies();
  }, []);

  return (
    <div className="page">
      <header>
        <h1>Prueba Buscador de Peliculas</h1>
        <form className="form">
          <input
            type="text"
            /* value="searchQuery" */
            placeholder="Star Wars, The Matrix... "
            /* onChange={(e) => setSearchQuery(e.target.value)} */
          />
          <button /* onClick={handleSearch} */ type="submit">Buscar</button>
        </form>
        <div>
          {searchQuery?.Search.map((item) => (
            <div key={item.imdbID}>
              <MoviesStrore {...item} />
            </div>
          ))}
        </div>
      </header>
    </div>
  );
};

export default App;
