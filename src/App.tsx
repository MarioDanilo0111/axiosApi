import "./App.css";
import { getMovies } from "./apiCall";
const searchQuery = "Avengers";
try {
  const moviesResponse = await getMovies(searchQuery);
  console.log(moviesResponse);
} catch (error) {
  console.error(error);
}

function App() {
  return (
    <div className="page">
      <header>
        <h1>Prueba Buscador de Peliculas</h1>
        <form className="form">
          <input type="text" placeholder="Star Wars, The Matrix... " />
          <button type="submit">Buscar</button>
        </form>
      </header>
    </div>
  );
}

export default App;
