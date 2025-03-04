import MovieCard from "../components/MovieCard"

function Home(){
    const movies = [
        {id: 1, title: "The Shawshank Redemption", year: 1994},
        {id: 2, title: "The Godfather", year: 1972},    
        {id: 3, title: "The Dark Knight", year: 2008},
        {id: 4, title: "Goodfellas", year: 1990}
    ]

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("Search form submitted")
    }

    return (
        <div className="home">
            <form onSubmit={handleSubmit} className="search-form">
                <input type="text" placeholder="Search..." 
                className="search-bar"></input>
                <button type="submit">Search</button>
            </form>

            <div className="movies-grid">
                {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
         </div>
    )
}

export default Home