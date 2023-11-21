import axios from "axios";
import { RootMovies } from "./interface/MoviesInterface.types";

const FAKE_DELAY = 1500;

const API_KEY = "4287ad07";

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

export const getMovies = (Search: string) => {
  try {
    const query = `?apikey=${API_KEY}&s=${Search}`;
    const movieResponse = get<RootMovies>(query);
    return movieResponse;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
