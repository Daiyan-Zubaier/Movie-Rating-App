import "../css/MovieCard.css"

function MovieCard({movie}){
    function onWatched(){
        console.log("Watched button clicked");
    }
    return (
        <div className="card">
            <div className="card-image">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <div className="overlay"> 
                    <button className="watched-button" onClick={onWatched}>👁</button>
                </div>
            </div>
            <div className="card-content">
                <h2>{movie.title}</h2>
                <p>{movie.release_date}</p>
            </div>
        </div>
    );
}

export default MovieCard;