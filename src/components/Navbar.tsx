// import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">AG_BJSOFT</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Pricing</a>
                    </li>
                </ul>
                <div className="user_option_box">
                    <a href="">
                        <i>A</i>
                    </a>
                    <a href="">
                        <i>C</i>
                    </a>
                </div>
                {/* <span className="navbar-text">
                </span> */}
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar;