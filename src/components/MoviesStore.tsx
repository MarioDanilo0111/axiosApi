import { RootMovies } from "../interface/MoviesInterface.types";

export function MoviesStrore({
  /* imdbID, */
  Title,
  Year,
  Type,
  Poster,
}: RootMovies["Search"][0]) {
  return (
    <>
      <div>
        <ul>
          <li>{Title}</li>
          <li>{Year}</li>
          <li>{Type}</li>
          <img src={Poster} alt="Picture" />
        </ul>
      </div>
    </>
  );
}
