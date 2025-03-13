import MovieCard from "../components/MovieCard"
import { useState, useEffect } from "react"
import  "../css/Home.css"
import { searchMovies, getPopularMovies } from "../services/api";

function Home(){
    // useState allows us to create a state variable, and a function to update that variable
    // The variable persists through re-renders, and the function is used to update the variable
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);

    // Error is set to null by default, and will be set to an error message if an error occurs
    const [error, setError] = useState(null);
    // Loading is set to true by default, and will be set to false once the data is loaded
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try{
                // Await is used to wait for the promise to resolve, and then assigns the resolved value to popularMovies
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (err) {
                console.log(err);
                setError("Failed to load");
            } finally {
                setLoading(false);
            }
        }
        loadPopularMovies();
    }, []);

    const handleSubmit = (event) => {
        // Normally clears page during submission, prevent default just prevents that
        event.preventDefault();
        console.log("Search form submitted");
    };

    return (
        <div className="home">
            <form onSubmit={handleSubmit} className="search-form">
                <input type="text" 
                placeholder="Search..." 
                className="search-bar"
                value={searchQuery}
                // Listens for a change in in state, and updates the searchQuery to the new value
                onChange={(e) => setSearchQuery(e.target.value)}></input>
                <button type="submit" className="search-button">Search</button> 
            </form>

            <div className="movies-grid">
                {movies.map(movie => 
                    movie.title.toLocaleLowerCase().startsWith(searchQuery) && (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
         </div>
    )
}

export default Home