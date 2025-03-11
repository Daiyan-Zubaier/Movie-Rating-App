import MovieCard from "../components/MovieCard"
import { useState } from "react"

function Home(){
    const [searchQuery, setSearchQuery] = useState("");
    const movies = [
        {id: 1, title: "The Shawshank Redemption", year: 1994},
        {id: 2, title: "The Godfather", year: 1972},    
        {id: 3, title: "The Dark Knight", year: 2008},
        {id: 4, title: "Goodfellas", year: 1990}
    ]

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
                <button type="submit">Search</button> 
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