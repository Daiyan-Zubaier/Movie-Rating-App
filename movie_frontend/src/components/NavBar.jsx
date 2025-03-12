import { Link } from 'react-router-dom';

function NavBar(){
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                {/*Links to homepage when you click on logo*/}
                <Link to="/">Movie App</Link>
            </div>
            <div className="navbar-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/watched" className="nav-link">Watched</Link>
            </div>

        </nav>
    )
}

export default NavBar