import { Link, NavLink, useLocation } from "react-router-dom";

export function AppHeader() {

    return (
      <div className="app-header">
        <div className="links-box">
        <Link to="/"><img src="../../public/images/logo.svg" alt="" /></Link>
        <div className="navlinks-box">
        <NavLink to="/" className="home-link">home</NavLink>
        <NavLink to="/about" className="about-link">about</NavLink>
        </div>
        </div>
        <button>contact us</button>
    </div>
    )
  }