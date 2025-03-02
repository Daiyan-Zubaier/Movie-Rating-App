function MovieCard({movie}){
    function onWatched(){
        console.log("Watched button clicked");
    }
    return (
        <div className="card">
            <div className="card-image">
                <img src={movie.url} alt={movie.title} />
                <div className="overlay"> 
                    <button className="watched-button" onClick={onWatched}>👁️</button>
                </div>
            </div>
            <div className="card-content">
                <h2>{movie.title}</h2>
                <p>{movie.year}</p>
            </div>
        </div>
    );
}

export default MovieCard;