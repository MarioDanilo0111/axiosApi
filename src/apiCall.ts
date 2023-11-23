import axios from "axios";
import { RootMovies } from "./interface/MoviesInterface.types";

const FAKE_DELAY = 1500;

// create a new axios instance
const instance = axios.create({
  baseURL: `https://www.omdbapi.com/`,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// GET data
const get = async <T>(query: string) => {
  const response = await instance.get<T>(query);
  // simulating delay
  const fakeDelay = FAKE_DELAY;
  await new Promise((resolve) => {
    setTimeout(resolve, Number(fakeDelay));
  });
  return response.data;
};

export const getMovies = async (Search: string): Promise<RootMovies> => {
  try {
    const query = `?i=tt3896198&apikey=${
      import.meta.env.VITE_APIKEY
    }&s=${Search}`;
    const movieResponse = await get<RootMovies>(query);
    return movieResponse;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
/* http://www.omdbapi.com/?i=tt3896198&apikey={...} */
