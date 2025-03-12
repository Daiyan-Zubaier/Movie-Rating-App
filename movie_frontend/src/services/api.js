const API_KEY = process.env.MOVIE_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

// Async function means that the function will wait until the promise is resolved
export const getPopularMovies = async () => {
    // fetch lets you send a network request
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);

    // Waits for results
    const data = await response.json();

    //results contains the array of movies
    return data.results;
};

export const searchMovies = async () => {
    // fetch lets you send a network request
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);

    // Waits for results
    const data = await response.json();

    //results contains the array of movies
    return data.results;
};